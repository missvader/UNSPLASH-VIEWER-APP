import React from "react";
const Photo = ({imageSource, alt, title, subtitle}) => {
  return (
    <div className="card p-1">
      <div className="relative flex figure">
        <img width="640" height="427" className="block image" src={imageSource} alt={alt} />
        <div className="absolute object-none left-1 bottom-1">
          <p className="text-gray-100 font-bold text-xs md:text-base ">{title}</p>
          <p className="text-gray-100 font-semibold text-xs md:text-base">{subtitle}</p>
      </div>
      </div>
      
      
    </div>
  )
}

export default Photo;