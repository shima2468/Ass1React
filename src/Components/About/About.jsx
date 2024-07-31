import { faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function About() {
  return (
       <>
           <div className='aboutBg w-full  flex justify-center items-center flex-col pb-15'>
                           <h2 className='text-3xl pt-8 text-white font-bold'>ABOUT COMPONENT</h2>
                             
                            <div className='flex justify-center items-center'>
                                    <div className='bg-white w-20 h-1 mt-3 me-2'></div>
                                    <FontAwesomeIcon icon={faStar} className='size-7 mt-2 text-white'/>
                                    <div className='bg-white w-20 h-1 mt-3 ms-2'></div>
                           </div>
                           <div className='flex justify-center items-center text-white'>
                                <p className='ms-32 my-4'>Freelancer is a free bootstrap theme created by Route. The download includes
                                     the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                                <p className='me-32'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                           </div>
           </div>

       </>

  )
}
