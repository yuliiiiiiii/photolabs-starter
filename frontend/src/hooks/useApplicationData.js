import { useState } from "react";
import photos from "mocks/photos";

// This is the custom hook to store all the state data from App component
const useApplicationData = (initial) => {
  // initial is initial = [[], false, {}], defined in App.js

  // const [likedPhotos, setLikedPhotos] = useState([]);
  const [likedPhotos, setLikedPhotos] = useState(initial[0]);

  // const [modalOpen, setModalOpen]= useState(false);
  const [modalOpen, setModalOpen] = useState(initial[1]);

  // const [selectedPhoto, setSelectedPhoto]=useState({});
  const [selectedPhoto, setSelectedPhoto] = useState(initial[2]);

  const switchLike = (photoId) => {
    
    if(likedPhotos.includes(photoId)) {
     setLikedPhotos(likedPhotos.filter(Id => Id != photoId))
     // if the photoId whose FavButton got clicked, already exists in the likedPhotos array, the click will remove the photoId from likedPhotos array, in order to change the photo to unliked
    } else {
     setLikedPhotos([...likedPhotos, photoId])
     // if the photoId doesn't exist in likedPhotos array, the click will add the photoId into the array, so that the photo is liked
    }
  }
  
  const openModal = (photoId) => {
    // another function to open modal and set selected photo details  -> pass down to HomeRoute, and called it in PhotoListItem with a photoId as parameter, in order to get the seletedPhoto state, pass down to Modal to show
    setModalOpen(true)

    const photoData = photos.filter(PhotoListItemData => PhotoListItemData["id"]===photoId)[0];
    setSelectedPhoto(photoData);
  }

  const closeModal = () => {
    // one function to close the modal -> pass this to modal
    setModalOpen(false)
  }

  return {
    likedPhotos,
    modalOpen,
    selectedPhoto,
    switchLike,
    openModal,
    closeModal
  };
  // it returns an Object which contains all the states and setter functions!!!
}

export default useApplicationData;