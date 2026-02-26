import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/serachSlice'

const Tabs = () => {
  const tabs = ["photos" , "videos" , "GIF"]
  const dispatch = useDispatch()
  const activeTab = useSelector((state)=>state.search.activeTab)
  console.log("Active Tab:", activeTab)
  
  return (
    <div className='flex gap-5  justify-center p-10'>
      {tabs.map(function(elem,idx){
        return(
          <button 
            className={`${(activeTab==elem?'bg-blue-700':'bg-gray-500')} transition cursor-pointer active:scale-95 px-5 py-3 rounded-3xl font-bold uppercase ` } 
            key={idx}
            onClick={()=>{
              dispatch(setActiveTabs(elem))
            }}
          >
            {elem}
            
          </button>
        )
      })
      }
    </div>
  )
}

export default Tabs
