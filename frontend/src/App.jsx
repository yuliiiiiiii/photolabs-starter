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
     
  const [modalOpen, setModalOpen]= useState(false);
  const [selectedPhoto, setSelectedPhoto]=useState({});
  

  // one function to close the modal -> pass this to modal
  // another function to open modal and set photo details url and similar photos -> pass down to HomeRoute

  const openModal = (photoId) => {
    !modalOpen && setModalOpen(true)
    modalOpen && setModalOpen(false)

    setfullUrl(photos.filter(PhotoListItemData => PhotoListItemData["id"]===photoId)[0]["urls"]["full"]);
    setSimilar_photos(...similar_photos, photos.filter(PhotoListItemData => PhotoListItemData["id"]===photoId)[0].similar_photos);
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
      
      <HomeRoute openModal={openModal} photos={photos}/>
      {/* HomeRoute is the main page */}
      {modalOpen && <PhotoDetailsModal openModal={openModal} />}
      {/* each photo in PhotoListItem onClick to triger openModal(), to set the modalOpen state as true */}
    </div>
  );
};

export default App;
