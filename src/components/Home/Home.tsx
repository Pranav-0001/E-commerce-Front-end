import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import SuggestionBox from './SuggestionBox'
import { useNavigate } from 'react-router-dom'




const Home = () => {
  const [isSuggesionOpen,setisSuggesionOpen]=useState(false)
  const navigate=useNavigate()
  return (
    <div className='w-full h-[100vh] px-4 bg-no-repeat bg-cover bg-center ' style={{backgroundImage:'url("images/Home.png")'}}>
      <div className='w-full flex justify-end pt-6  '>
        <img src="images/zevilogo.png" alt="logo" width={50} />
      </div>
      <div className='w-full flex justify-center px-6 pt-10 '>
        <div className='lg:w-1/2 md:w-3/4 w-full  bg-white h-10 rounded-lg px-4 flex items-center'>
          <input type="text"  className='h-full bg-transparent outline-none w-full' onKeyPress={(e)=>e.key=='Enter'?navigate('/products'):null} onFocus={()=>setisSuggesionOpen(true)} onBlur={()=>setisSuggesionOpen(false)}/>
          <FontAwesomeIcon onClick={()=>navigate('/products')} icon={faSearch} className='text-gray-500 text-xl'/>
        </div>
        
      </div> 
      {isSuggesionOpen&&<SuggestionBox/>}

    </div>
  )
}
 
export default Home
