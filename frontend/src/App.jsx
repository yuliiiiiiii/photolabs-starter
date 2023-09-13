import React, {useState} from 'react';

// import PhotoListItem from './components/PhotoListItem';
// import PhotoList from 'components/PhotoList';
// import TopicList from 'components/TopicList';
// import TopNavigation from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';

// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };

// const sampleDataarray = [];
// sampleDataarray.push(sampleDataForPhotoListItem, sampleDataForPhotoListItem, sampleDataForPhotoListItem);

// const photos = sampleDataarray.map((sampleDataForPhotoListItem, index) => {
//   // .map function can get value and index of each element in the array
//   return <PhotoListItem sampleDataForPhotoListItem = {sampleDataForPhotoListItem} key = {index} /> 
// })


const App = () => {
  
  const [likedPhotos, setLikedPhotos] = useState([]);
  // set the state as an array of liked photos' ids

  // set global state, the button to setActive is in PhotoFavButton.jsx => onClck={toggleActive}

  const switchLike = (photoId) => {
    
   if(likedPhotos.includes(photoId)) {
    setLikedPhotos(likedPhotos.filter(Id => Id != photoId))
    // if the photoId whoes FavButton got clicked, already exists in the likedPhotos array, the click will remove the photoId from likedPhotos array, in order to change the photo to unliked
   } else {
    setLikedPhotos([...likedPhotos, photoId])
    // if the photoId doesn't exist in likedPhotos array, the click will add the photoId into the array, so that the photo is liked
   }
  }

  const [modalOpen, setModalOpen]= useState(false);
  const [selectedPhoto, setSelectedPhoto]=useState({});

  const closeModal = () => {
    // one function to close the modal -> pass this to modal
    setModalOpen(false)
  }

  const openModal = (photoId) => {
    // another function to open modal and set selected photo details  -> pass down to HomeRoute, and called it in PhotoListItem with a photoId as parameter, in order to get the seletedPhoto state, pass down to Modal to show
    setModalOpen(true)

    const photoData = photos.filter(PhotoListItemData => PhotoListItemData["id"]===photoId)[0];
    setSelectedPhoto(photoData);
  }

  return (
    // Note: Rendering a single component to build components in isolation
    <div className="App">

      {/* <PhotoListItem sampleDataForPhotoListItem = {sampleDataForPhotoListItem}
      key = {sampleDataForPhotoListItem.id}/> */}

      {/* Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity */}
      {/* Need to add an extra prop to each child component(PhotoListItem) called key */}
      
      {/* <TopicList /> */}
      {/* <TopNavigation /> */}

      {/* {photos} */}
      {/* <PhotoList /> */}
      
      <HomeRoute openModal={openModal} photos={photos} likedPhotos={likedPhotos} switchLike={switchLike} />
      {/* HomeRoute is the main page */}
      {modalOpen && <PhotoDetailsModal closeModal={closeModal} selectedPhoto={selectedPhoto} likedPhotos={likedPhotos} switchLike={switchLike} />}
      {/* each photo in PhotoListItem onClick to triger openModal(), to set the modalOpen state as true */}
    </div>
  );
};

export default App;
