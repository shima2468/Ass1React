import React from 'react'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import imgHome from '../../assets/avataaars.svg'
export default function Home() {
  return (
    <>
       <div className='flex justify-center items-center bg-teal-500 mainHome w-full'>
              <div className="img-home flex justify-center items-center flex-col">
                  <img src={imgHome} alt="" className='block w-72'/>
                  <h2 className='text-4xl pt-8 text-white font-bold '>START FRAMEWORK</h2>
                             
                  <div className='flex justify-center items-center'>
                                     <div className='bg-white w-20 h-1 mt-3 me-2'></div>
                                     <FontAwesomeIcon icon={faStar} className='size-7 mt-2 text-white'/>
                                     <div className='bg-white w-20 h-1 mt-3 ms-2'></div>
                  
                 </div>
                 <p className='mt-5 text-white text-1.5xl'>Graphic Artist - Web Designer - Illustrator</p>
              </div>
       </div>
    </>
  )
}
