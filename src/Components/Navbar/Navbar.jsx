import { NavbarLink } from 'flowbite-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
// import styles from "./Navbar.module.css"
export default function Navbar() {
  return (
    <>
       

       <nav className="bg-gray-900 border-gray-200 dark:bg-gray-900 white w-full p-6">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse text-white">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">START FRAMEWORK</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                </button>
                <div className=" w-full md:block md:w-auto" id="navbar-default">
                <ul className="  font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 text-white dark:bg-gray-800 ">
                    <li>
                    <NavLink to="about" className="text-white block py-2 px-3 text-gray-900 rounded  md:border-0 md:p-0">ABOUT</NavLink>
                    </li>
                    <li>
                    <NavLink to="portfolio" className=" text-white block py-2 px-3 text-gray-900 rounded  md:border-0 md:p-0 ">PORTFOLIO</NavLink>
                    </li>
                    <li>
                    <NavLink  to="contact" className="text-white block py-2 px-3 text-gray-900 rounded  md:border-0 md:p-0 dark:text-white">CONTACT</NavLink>
                    </li>
                    
                </ul>
                </div>
            </div>
</nav>
    </>
  )
}
