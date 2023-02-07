import React, {useEffect, useState} from "react";
import { createContext } from "react";
import { createApi } from "unsplash-js";

export const PhotosContext = createContext();

export const PhotosContextProvider = (props) => {
  const [data, setData] = useState(null);
  const API_KEY = import.meta.env.VITE_APP_API_KEY;
  const api = createApi({
    accessKey: API_KEY
  })

  const getRandom = () => {
    api.photos
    .getRandom({count:12})
    .then(result => {
      let data1 = result.response;
      console.log(result.response)
      setData(data1);
    })
    .catch(() => {
      console.log("something went wrong!");
    })
    
  }
  useEffect(() => {
    /*api.photos
      .getRandom({count:12})
      .then(result => {
        let arr = result.response;
        console.log(result.response)
      })
      .catch(() => {
        console.log("something went wrong!");
      })*/
     getRandom(); 
    
      
      
  }, []);
  console.log("data =>", data)
  return (
    <PhotosContext.Provider value={{
      data
    }}>
      {props.children}
    </PhotosContext.Provider> 
  )

}