import React, {useEffect, useState} from "react";
import { createContext } from "react";
import { createApi } from "unsplash-js";

export const PhotosContext = createContext();

export const PhotosContextProvider = (props) => {
  const [data, setData] = useState(null);
  const api = createApi({
    accessKey: 'nzzfPuH1I8avNf4UmVkuxF7WIsOZWrojpQ5GsrmPIWw'
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
     getRandom(); 
  }, []);
  return (
    <PhotosContext.Provider value={{
      data,
      getRandom
    }}>
      {props.children}
    </PhotosContext.Provider> 
  )
}