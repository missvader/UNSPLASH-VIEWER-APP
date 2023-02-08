import React from "react";
import { useContext } from "react";
import { PhotosContext } from "../context/PhotosContext";
import Photo from "./Photo";

const ImageGallery = () => {
  const {data} = useContext(PhotosContext);
  if (data === null) {
    return <div>Loading...</div>;
  } else if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    ); 
    } else {
      return (
        <div
          className="container-masonry"
          >
          {data.map(item => (
            <Photo
              key={item.id}
              imageSource = {item.urls.regular}
              alt = {item.alt_description}
              title = {item.alt_description}
              subtitle = {item.user.name}
            />
          )

          )}
        </div>
      );
    }
   
  
  
};

export default ImageGallery;