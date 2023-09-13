import React, {useState} from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';


const HomeRoute = (props) => {
// HomeRoute is the main page of the PhotoLabs app
  const {openModal, photos, likedPhotos, switchLike, modalOpen} = props

  // const [likedPhotos, setLikedPhotos] = useState([]);
  // // set the state as an array of liked photos' ids

  // // set global state, the button to setActive is in PhotoFavButton.jsx => onClck={toggleActive}

  // const switchLike = (photoId) => {
    
  //  if(likedPhotos.includes(photoId)) {
  //   setLikedPhotos(likedPhotos.filter(Id => Id != photoId))
  //   // if the photoId whoes FavButton got clicked, already exists in the likedPhotos array, the click will remove the photoId from likedPhotos array, in order to change the photo to unliked
  //  } else {
  //   setLikedPhotos([...likedPhotos, photoId])
  //   // if the photoId doesn't exist in likedPhotos array, the click will add the photoId into the array, so that the photo is liked
  //  }
  // }

return (
    <div className="home-route">
      <TopNavigation likedPhotos={likedPhotos} />
      {/* Nav needs the inital amount  of liked photos(state) as props!!! */}
      <PhotoList likedPhotos={likedPhotos} switchLike={switchLike} photos={photos} openModal={openModal} modalOpen={modalOpen}/>
    </div>
  );
};

export default HomeRoute;
