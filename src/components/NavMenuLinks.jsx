import React from 'react'
import {FiUser, FiHome, FiFolder, FiEdit3, FiMail, FiBriefcase} from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'

const NavMenuLinks = () => {
  const location = useLocation();

  return (
    <div className="flex justify-center md:justify-end text-[#324B4C] dark:text-white font-medium menu menu-horizontal rounded-box bg-transparent">
      <Link to={location.pathname === '/about' ? '/' : '/about'}>
        <div className="flex items-center mr-1 group">
          <div className="flex items-center  p-1">
            {location.pathname === '/about' ? (
              <FiHome className="text-[#324B4C] group-active:font-bold dark:text-white inline-block mr- md:m-1 group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50" />
            ) : (
              <FiUser className="text-[#324B4C] dark:text-white inline-block mr-1 md:m-1 group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50" />
            )}
            <span className="inline-block py-2 md:py-0 sm:hidden md:block group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50">
              {location.pathname === '/about' ? 'Home' : 'About'}
            </span>
          </div>
        </div>
      </Link>
      <Link to={location.pathname === '/portfolio' ? '/' : '/portfolio'}>
        <div className="flex items-center mr-1 group">
          <div className="flex items-center  p-1">
            {location.pathname === '/portfolio' ? (
              <FiHome className="text-[#324B4C] group-active:font-bold dark:text-white inline-block mr-1 md:m-1 group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50" />
            ) : (
              <FiFolder className="text-[#324B4C] dark:text-white inline-block mr-1 md:m-1 group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50" />
            )}
            <span className="inline-block py-2 md:py-0 sm:hidden md:block group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50">
              {location.pathname === '/portfolio' ? 'Home' : 'Portfolio'}
            </span>
          </div>
        </div>
      </Link>
      <Link to={location.pathname === '/experience' ? '/' : '/experience'}>
        <div className="flex items-center mr-1 group">
          <div className="flex items-center  p-1">
            {location.pathname === '/experience' ? (
              <FiHome className="text-[#324B4C] group-active:font-bold dark:text-white inline-block mr-1 md:m-1 group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50" />
            ) : (
              <FiBriefcase className="text-[#324B4C] dark:text-white inline-block mr-1 md:m-1 group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50" />
            )}
            <span className="inline-block py-2 md:py-0 sm:hidden md:block group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50">
              {location.pathname === '/experience' ? 'Home' : 'Experience'}
            </span>
          </div>
        </div>
      </Link>
      <div className="flex items-center mr-1">
        <FiEdit3 className="text-[#324B4C] dark:text-white inline-block mr-2" />
        <span className="inline-block py-2 md:py-0 sm:hidden md:block">Blog</span>
      </div>
      <div className="flex items-center mr-1">
        <FiMail className="text-[#324B4C] dark:text-white inline-block mr-2" />
        <span className="inline-block py-2 md:py-0 sm:hidden md:block">Contact</span>
      </div>
    </div>
  )
}

export default NavMenuLinks
