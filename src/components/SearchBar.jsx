import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { setQuery } from '../redux/features/serachSlice'
const SearchBar = () => {
  const [text,setText]=useState('')

 const dispatch= useDispatch()
 function handleSubmit(e){
    e.preventDefault()
    dispatch(setQuery(text))
    console.log(text);
    
    setText('')
    
 }
  
  return (
    <div>
      <form onSubmit={(e)=>{
        handleSubmit(e)
      }} className='flex py-10 px-10 gap-5 bg-(--c1) '>
          <input 
            value={text}
            onChange={(e)=>{
              setText(e.target.value)
            }}
            required
            text="text"
            className='w-full border-2 px-'
            placeholder='Search anything...'

          />
          <button className='active:scale-95 cursor-pointer border-2 px-6 py-3 text-xl rounded outline-none'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar
