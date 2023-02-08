import React from "react";
import { useContext } from "react";
import { PhotosContext } from "../context/PhotosContext";
const Button = () => {
  const {getRandom} = useContext(PhotosContext);
  return (
    <div className="grid justify-items-center mt-5">
      <button 
        className="btn btn-block  bg-white  text-black hover:text-gray-200 hover:bg-gray-500"
        onClick={getRandom}
      >Cargar nuevas fotos</button>
    </div>
  )
}
export default Button