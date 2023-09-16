import { useState, useReducer, useEffect } from "react";
// import photos from "mocks/photos";
// import topics from "mocks/topics";

// This is the custom hook to store all the state data from App component
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  // DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_MODAL: 'CLOSE_MODAL',
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS"
}



function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {...state, likedPhotos:[...state.likedPhotos, action.payload.photoId]}
      // return the copy of initial state, and change the correlated individual state in the copy, return all individual states as a state
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {...state, likedPhotos:state.likedPhotos.filter(Id => Id != action.payload.photoId)}
    case ACTIONS.SELECT_PHOTO:
      const photoData = state.photoData.filter(PhotoListItemData => PhotoListItemData["id"]===action.payload.photoId)[0];
      return {...state, modalOpen:true, selectedPhoto:photoData}
    case ACTIONS.CLOSE_MODAL:
      return {...state, modalOpen:false}
    case ACTIONS.SET_PHOTO_DATA:
      return {...state, photoData: action.payload}
    case ACTIONS.SET_TOPIC_DATA:
       return {...state, topicData: action.payload}
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
       return {...state, photosByTopic: action.payload}
  default:
    return state;
  }
}

const useApplicationData = (initial) => {
  // initial is initial = [[], false, {}], defined in App.js
 

  const initialState = {
   likedPhotos:initial[0],
   modalOpen:initial[1],
   selectedPhoto:initial[2],
   photosByTopic:initial[0],
   photoData:initial[0],
   topicData:initial[0]
  }

  const [state, dispatch] = useReducer(reducer, initialState);
// state as an Object of all individual states

  // const [likedPhotos, setLikedPhotos] = useState([]);
  // const [likedPhotos, setLikedPhotos] = useState(initial[0]);
 
  // const [modalOpen, setModalOpen]= useState(false);
  // const [modalOpen, setModalOpen] = useState(initial[1]);

  // const [selectedPhoto, setSelectedPhoto]=useState({});
  // const [selectedPhoto, setSelectedPhoto] = useState(initial[2]);
  
  useEffect(()=> {
    fetch("/api/photos")
    .then(response => {
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      return response.json(); //return data
    })
    .then(data => dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: data })) //store the fetched data in payload
    .catch(error => console.error('Error:', error));
  }, []);
  // useEffect is triggered everytime there's browser re-render(like a state change, so user can not call it!)

  useEffect(() => {
    fetch("/api/topics")
    .then(response => {
      if(!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      return response.json(); //return data
    })
    .then(data => dispatch({type: ACTIONS.SET_TOPIC_DATA, payload: data }))
    .catch(error => console.error('Error:', error));
  }, []);

  const selectTopic = (topicId) => {
  // only do the fetch request when called!!(when user clicked a topic button), so the fetch request should be inside of a function not a useEffect!
    fetch(`/api/topics/photos/${topicId}`)
    .then(response => {
      if(!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      return response.json(); //return data
    })
    .then(data => dispatch({type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data }))
    .catch(error => console.error('Error:', error));
  }

  const switchLike = (photoId) => {
    
    if(state.likedPhotos.includes(photoId)) {
    //  setLikedPhotos(likedPhotos.filter(Id => Id != photoId))
    dispatch({type: ACTIONS.FAV_PHOTO_REMOVED, payload: {photoId}})
    // dispatch an action, which is one of the parameters of reducer functon
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
    photoData:state.photoData,
    topicData:state.topicData,
    likedPhotos:state.likedPhotos,
    modalOpen: state.modalOpen,
    selectedPhoto: state.selectedPhoto,
    photosByTopic: state.photosByTopic,
    switchLike,
    openModal,
    closeModal,
    selectTopic
  };
  // it returns an Object which contains all the states and setter functions!!!
}

export default useApplicationData;