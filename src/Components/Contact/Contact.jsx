import React from 'react'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Contact() {
  return (
       <> 
       <div className='contact'>
            <div className='bg-white  w-full  flex  items-center flex-col  mt-6'>
                                <h2 className='text-3xl pt-8 text-gray-900 font-bold'>CONATCT SECTION</h2>
                                    
                                    <div className='flex justify-center items-center'>
                                            <div className='bg-gray-900 w-20 h-1 mt-3 me-2'></div>
                                            <FontAwesomeIcon icon={faStar} className='size-7 mt-2 text-gray-900'/>
                                            <div className='bg-gray-900 w-20 h-1 mt-3 ms-2'></div>
                                </div>
                                

                                
            </div>
            <form className='mx-52 my-11'>

                                            <div className="mb-5">
                                                <input type="email" id="email" className="w-full bg-gray-50 border-0 border-b-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="userName" required />
                                            </div>
                                            <div className="mb-5">
                                                <input type="password" id="password" className="bg-gray-50 border-0 border-b-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   placeholder='userAge'/>
                                            </div>
                                            <div className="mb-5">
                                                <input type="password" id="password" className="bg-gray-50 border-0 border-b-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   placeholder='userEmail'/>
                                            </div>
                                            <div className="mb-5">
                                                <input type="password" id="password" className="bg-gray-50 border-0 border-b-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   placeholder='userPassword'/>
                                            </div>
                                            <div className="flex items-start mb-5">
                                                <div className="flex items-center h-5">
                                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border-0 border-b-2 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                                                </div>
                                                <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                            </div>
                                            <button type="submit" className="text-white bg-teal-500 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </form>

       </div>
                 
       
       </>
  )
}
