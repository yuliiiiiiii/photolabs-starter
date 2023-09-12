import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
// import photos from "mocks/photos";

// const sampleDataForPhotoList = [
//   {
//     id: "1",
//     location: {
//       city: "Montreal",
//       country: "Canada",
//     },
//     urls: {
//       full: `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
//       regular: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//     },
//     user: {
//       id: "1",
//       username: "exampleuser",
//       name: "Joe Example",
//       profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//     },
//   },
//   {
//     id: "2",
//     location: {
//       city: "Toronto",
//       country: "Canada",
//     },
//     urls: {
//       full: `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
//       regular: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
//     },
//     user: {
//       id: "2",
//       username: "exampleuser",
//       name: "Joe Example",
//       profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//     },
//   },
//   {
//     id: "3",
//     location: {
//       city: "Ottawa",
//       country: "Canada",
//     },
//     urls: {
//       full: `${process.env.PUBLIC_URL}/Image-3-Full.jpeg`,
//       regular: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
//     },
//     user: {
//       id: "3",
//       username: "exampleuser",
//       name: "Joe Example",
//       profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//     },
//   },
// ];

const PhotoList = (props) => {
  const {likedPhotos, switchLike, photos, openModal} = props
  // get the state => [active, setactive] from global state, which is declare in HomeRoute.jsx
  
  // will need to receice photos as props
  const photoListItemsArray = Array.isArray(photos) && photos.map(DataForPhotoListItem => 
  <PhotoListItem 
  DataForPhotoListItem={DataForPhotoListItem} 
  key={DataForPhotoListItem["id"]} 
  photoId={DataForPhotoListItem["id"]}
  switchLike={switchLike}
  likedPhotos={likedPhotos}
  openModal={openModal}/>)
  
  return (
    <ul className="photo-list">
      {photoListItemsArray}
    </ul>
  );
};

export default PhotoList;
