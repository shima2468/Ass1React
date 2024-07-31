import React from 'react'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img1 from '../../assets/poert1 (1).png'
import img2 from '../../assets/port2 (1).png'
import img3 from '../../assets/port3 (1).png'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
export default function Portfolio() {
  return (
        <>
              <div className='bg-white port w-full  flex justify-center items-center flex-col pb-15 my-9 sm:mt-0'>
                           <h2 className='text-3xl pt-12 text-gray-900 font-bold sm:pt-12'>ABOUT COMPONENT</h2>
                             
                            <div className='flex justify-center items-center'>
                                    <div className='bg-gray-900 w-20 h-1 mt-3 me-2'></div>
                                    <FontAwesomeIcon icon={faStar} className='size-7 mt-2 text-gray-900'/>
                                    <div className='bg-gray-900 w-20 h-1 mt-3 ms-2'></div>
                           </div>
                           <div className="img-cont grid md:grid-cols-3 md:w-9/12 gap-3 mt-5 sm:grid sm:grid-cols-2 sm:w-4/5 sm:mb-11">
                                       <div >
                                            <div className="relative group">
                                                        <img src={img1} alt="" className="rounded-md group-hover:bg-teal-500" />
                                                        <div className="absolute inset-0 layout opacity-0 flex justify-center items-center group-hover:opacity-90 transition-opacity rounded-md duration-300">
                                                            <FontAwesomeIcon icon={faPlus} className='text-white size-24'/>
                                                        </div>
                                            </div>
                                                    
                                       </div>
                                        
                                       <div >
                                             <div className="relative group">
                                                        <img src={img2} alt="" className="rounded-md group-hover:bg-teal-500" />
                                                        <div className="absolute inset-0 layout opacity-0 flex justify-center items-center group-hover:opacity-90 transition-opacity rounded-md duration-300">
                                                            <FontAwesomeIcon icon={faPlus} className='text-white size-24'/>
                                                        </div>
                                            </div>
                                               
                                       </div>
                                       <div >
                                            <div className="relative group">
                                                        <img src={img3} alt="" className="rounded-md group-hover:bg-teal-500" />
                                                        <div className="absolute inset-0 layout opacity-0 flex justify-center items-center group-hover:opacity-90 transition-opacity rounded-md duration-300">
                                                            <FontAwesomeIcon icon={faPlus} className='text-white size-24'/>
                                                        </div>
                                            </div>
                                               
                                       </div>
                                       <div>
                                            <div className="relative group">
                                                        <img src={img1} alt="" className="rounded-md group-hover:bg-teal-500" />
                                                        <div className="absolute inset-0 layout opacity-0 flex justify-center items-center group-hover:opacity-90 transition-opacity rounded-md duration-300">
                                                            <FontAwesomeIcon icon={faPlus} className='text-white size-24'/>
                                                        </div>
                                            </div>
                                                    
                                       </div>
                                        
                                       <div >
                                             <div className="relative group">
                                                        <img src={img2} alt="" className="rounded-md group-hover:bg-teal-500" />
                                                        <div className="absolute inset-0 layout opacity-0 flex justify-center items-center group-hover:opacity-90 transition-opacity rounded-md duration-300">
                                                            <FontAwesomeIcon icon={faPlus} className='text-white size-24'/>
                                                        </div>
                                            </div>
                                               
                                       </div>
                                       <div>
                                            <div className="relative group">
                                                        <img src={img3} alt="" className="rounded-md group-hover:bg-teal-500" />
                                                        <div className="absolute inset-0 layout opacity-0 flex justify-center items-center group-hover:opacity-90 transition-opacity rounded-md duration-300">
                                                            <FontAwesomeIcon icon={faPlus} className='text-white size-24'/>
                                                        </div>
                                            </div>
                                               
                                       </div>
                                       
                                    
                                       
                                 </div>
                           </div>
    
            
        </>
  )
}
