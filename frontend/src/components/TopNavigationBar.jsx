import React from 'react';
import TopicList from './TopicList';
import FavIcon from './FavIcon';
import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {
 const {likedPhotos, topics} = props;
 
 let isFavPhotoExist = likedPhotos.length > 0 ? true : false


  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar">
       <TopicList topics={topics}/>
       <FavIcon displayAlert={isFavPhotoExist} selected={true}/>
      </div>
    </div>
  )
}

export default TopNavigation;