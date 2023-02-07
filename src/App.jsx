import { useState, useEffect } from 'react'
import axios from 'axios';
import { PhotosContextProvider } from './context/PhotosContext';
import Button from './components/Button';
import ImageGallery from './components/ImageGallery';
import './App.css'


function App() {
  return (
    <PhotosContextProvider>
      <div className="app w-3/4 mx-auto">
        <Button/>
        <ImageGallery/>
      </div>
    </PhotosContextProvider>
    
  )
}

export default App
