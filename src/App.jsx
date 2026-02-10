import React from 'react'
import  { fetchPhotos,fetchVideo } from './api/mediaApi'

const App = () => {
  
  return (
    <div className='h-screen w-full bg-gray-950 text-white'>
      App
      <button onClick={ async ()=>{
       const data = await fetchPhotos('cat')
       console.log(data);
       
      }}>
        vli
        {/* fetchPhoto() */}
      </button>
      <button onClick={ async ()=>{
       const data = await fetchVideo('cat')
       console.log(data);
       
      }}>
        videos 
        {/* fetchPhoto() */}
      </button>
    </div>
  )
}

export default App
