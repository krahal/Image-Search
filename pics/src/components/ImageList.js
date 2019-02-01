import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
  // use map function for rendering lists
  const images = props.images.map((image) => {
    // add key prop to root ele returned from list of jsx records
    return <ImageCard  key={image.id} image={image} />
  });
  
  return <div className="image-list">{images}</div>
}

export default ImageList;