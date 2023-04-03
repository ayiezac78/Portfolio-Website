import React from 'react'
import {FiUser, FiFolder, FiEdit3, FiMail} from 'react-icons/fi'
import { Link } from 'react-router-dom'

const NavMenuLinks = () => {
  return (
    <div className="flex justify-center md:justify-end">
      <Link to='/about'>
        <div className="flex items-center mr-2">
          <FiUser className="text-white inline-block mr-2 md:m-1" />
          <span className="inline-block py-2 md:py-0">About</span>
        </div>
      </Link>
      <div className="flex items-center mr-2">
        <FiFolder className="text-white inline-block mr-2 md:m-1" />
        <span className="inline-block py-2 md:py-0">Portfolio</span>
      </div>
      <div className="flex items-center mr-2">
        <FiEdit3 className="text-white inline-block mr-2" />
        <span className="inline-block py-2 md:py-0">Blog</span>
      </div>
      <div className="flex items-center mr-2">
        <FiMail className="text-white inline-block mr-2" />
        <span className="inline-block py-2 md:py-0">Contact</span>
      </div>
    </div>
  )
}

export default NavMenuLinks