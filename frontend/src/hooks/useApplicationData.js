import { useState, useReducer } from "react";
import photos from "mocks/photos";

// This is the custom hook to store all the state data from App component
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  // SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  // DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_MODAL: 'CLOSE_MODAL'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {...state, likedPhotos:[...state.likedPhotos, action.payload.photoId]}
      // return the copy of initial state, and change the correlated individual state in the copy, return all individual states as a state
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {...state, likedPhotos:state.likedPhotos.filter(Id => Id != action.payload.photoId)}
    case ACTIONS.SELECT_PHOTO:
      const photoData = photos.filter(PhotoListItemData => PhotoListItemData["id"]===action.payload.photoId)[0];
      return {...state, modalOpen:true, selectedPhoto:photoData}
    case ACTIONS.CLOSE_MODAL:
      return {...state, modalOpen:false}
  default:
    return state;
  }
}

const useApplicationData = (initial) => {
  // initial is initial = [[], false, {}], defined in App.js
 

  const initialState = {
   likedPhotos:initial[0],
   modalOpen:initial[1],
   selectedPhoto:initial[2]
  }

  const [state, dispatch] = useReducer(reducer, initialState);
// state as an Object of all individual states

  // const [likedPhotos, setLikedPhotos] = useState([]);
  // const [likedPhotos, setLikedPhotos] = useState(initial[0]);
 
  // const [modalOpen, setModalOpen]= useState(false);
  // const [modalOpen, setModalOpen] = useState(initial[1]);

  // const [selectedPhoto, setSelectedPhoto]=useState({});
  // const [selectedPhoto, setSelectedPhoto] = useState(initial[2]);

  const switchLike = (photoId) => {
    
    if(state.likedPhotos.includes(photoId)) {
    //  setLikedPhotos(likedPhotos.filter(Id => Id != photoId))
    dispatch({type: ACTIONS.FAV_PHOTO_REMOVED, payload: {photoId}})
     // if the photoId whose FavButton got clicked, already exists in the likedPhotos array, the click will remove the photoId from likedPhotos array, in order to change the photo to unliked
    } else {
    //  setLikedPhotos([...likedPhotos, photoId])
    dispatch({type: ACTIONS.FAV_PHOTO_ADDED, payload: {photoId}})
    // payload is the value passed to action in order to use to change the correlated state

     // if the photoId doesn't exist in likedPhotos array, the click will add the photoId into the array, so that the photo is liked
    }
  }
  
  const openModal = (photoId) => {
    // another function to open modal and set selected photo details  -> pass down to HomeRoute, and called it in PhotoListItem with a photoId as parameter, in order to get the seletedPhoto state, pass down to Modal to show
    // setModalOpen(true)

    // const photoData = photos.filter(PhotoListItemData => PhotoListItemData["id"]===photoId)[0];
    // setSelectedPhoto(photoData);
    dispatch({type: ACTIONS.SELECT_PHOTO, payload:{photoId}})
  }

  const closeModal = () => {
    // one function to close the modal -> pass this to modal
    // setModalOpen(false)
    dispatch({type: ACTIONS.CLOSE_MODAL})
  }

  return {
    likedPhotos:state.likedPhotos,
    modalOpen: state.modalOpen,
    selectedPhoto: state.selectedPhoto,
    switchLike,
    openModal,
    closeModal
  };
  // it returns an Object which contains all the states and setter functions!!!
}

export default useApplicationData;