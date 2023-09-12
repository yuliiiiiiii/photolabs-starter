import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const {openModal}=props;

  const closeModal = () => {
    openModal()
  }

  // console.log(fullUrl)
  // console.log(similar_photos)
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <span>Large img here</span>
      <span>Similar Photos</span>
      <span>similar_photos here</span>

    </div>
  )
};

export default PhotoDetailsModal;
