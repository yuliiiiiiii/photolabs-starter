import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  // console.log("PhotoFavButtonProps:", props)
 
  const {switchLike, likedPhotos, photoId} = props;
  // get the state and setState from its parent => PhotoListItem.jsx
  // [state, function to change the state] = useState(initial state)
  // each FavButton has it's own photoId, because it is on every photo!

  const toggleActive = () => {
    // setActive((active) => !active)
    // setActive should always be a callback, so that it only changes the current state!
    // setActive(currentState => !currentState)
    
     switchLike(photoId);
  }

  return (
    <div className='photo-list__fav-icon' onClick={toggleActive}>
      <div className='photo-list__fav-icon-svg'>
         <FavIcon selected={likedPhotos.includes(photoId)}/>
         {/* check if the photoId is in the likedPhotos array(if the photo is liked) */}

         {/* check FavIcon.jsx, see line 6< fill={selected ? "#C80000" : "#EEEEEE"}> to know selected as a key whose value is Boolean
         , and the value is passed in as props! */}
      </div>
    </div>
  );
}

export default PhotoFavButton;

// <div className={active === "Inactive" ? 'photo-list__fav-icon' : ''} onClick={handleClick_ToActive}>
// <div className={active === "Active" ? 'photo-list__fav-icon-svg' : ''} onClick= {handleClick_ToInactive}>
//    <FavIcon></FavIcon> 
// </div>
// </div>