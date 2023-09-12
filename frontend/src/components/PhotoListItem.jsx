import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";
// import the style and add className to each element to use related style, CSS scoped to only this component


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

// build component with sample data first to focus on structure

const PhotoListItem = (props) => {
  const {urls, location, user} = props.DataForPhotoListItem;
   // got props from PhotoList.jsx
  const {switchLike, likedPhotos, photoId, openModal}=props
  // get the state from parent(PhotoList)

  const clickPhoto = () => {
    openModal(photoId);
  }

  return (
    <div className="photo-list__item">
    {/* className naming convention is based on BEM => 
    Block: Encapsulates a standalone entity that is meaningful on its own. In our case this is the .photo-list.
    Element: An element that is tied to its block. In our case this is the .photo-list__item
    Modifier: A modification to a block or an element. In our case this is .photo-list__item--selected or .photo-list__item--disabled.*/}

      <PhotoFavButton switchLike={switchLike} likedPhotos={likedPhotos} photoId={photoId}/>
      
      <img className="photo-list__image" src={urls.regular} onClick={clickPhoto}/>

      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile} />
        <div className="photo-list__user-info">
          <span>{user.username}</span><br />
          <span className="photo-list__user-location">{location.city} {location.country}</span>
        </div>
      </div>


    </div>
  );
  
};

export default PhotoListItem;
