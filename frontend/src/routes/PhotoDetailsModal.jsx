import React from 'react';
import PhotoFavButton from 'components/PhotoFavButton';
import '../styles/PhotoDetailsModal.scss'
import '../styles/PhotoListItem.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const {closeModal, selectedPhoto, likedPhotos, switchLike}=props;
  const photos = Object.values(props.selectedPhoto.similar_photos)
  // selectedPhoto is an object
  // likedPhotos is an array of liked photos id

  const handleClick = () => {
    closeModal()
  }

  // console.log(likedPhotos);
  
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleClick}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      
      {/* <PhotoFavButton switchLike={switchLike} likedPhotos={likedPhotos} photoId={selectedPhoto.id} /> */}
      
      <div className='Header'>
        <PhotoFavButton switchLike={switchLike} likedPhotos={likedPhotos} photoId={selectedPhoto.id} />
        <img className="photo-details-modal__image" src={selectedPhoto.urls.full} alt='full size photo' />
      </div>
        
      <div className='photo-details-modal__top-bar'>
        <div className='photo-details-modal__photographer-details'>
          <img className="photo-list__user-profile" src={selectedPhoto.user.profile} alt='photographer photo' />
      
          <div className='photo-list__user-info'>
            <span>{selectedPhoto.user.username}</span><br />
            <span className='photo-list__user-location'>{selectedPhoto.location.city} {selectedPhoto.location.country}</span>
          </div>
        </div>

        <span className='photo-details-modal__header'>Similar Photos</span>
      </div> 

     
      <div className='photo-details-modal__images'>
      <PhotoList likedPhotos={likedPhotos} switchLike={switchLike} photos={photos} />
      </div>

    </div>
  )
};

export default PhotoDetailsModal;
