import {FiMoon, FiSun,FiDownload} from 'react-icons/fi'
import {TbAt} from 'react-icons/tb'
import { useState, useEffect } from 'react';
import '../assets/styles/blurbgnavbar.css'
import NavMenuLinks from './NavMenuLinks';
import {FiUser, FiHome, FiFolder, FiEdit3, FiMail, FiBriefcase} from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'


const NavigationBar = (props) => {
  const [iconClicked, setIconClicked] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setIconClicked(!iconClicked); // toggle the state
    props.toggleMode(); // call the toggleMode function from props
  };

useEffect(() => {
  const handleScroll = () => {
    const navbar = document.querySelector('.navbar');
    if (navbar && window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <div className="navbar w-full fixed top-0 left-0 px-4 z-10 shadow">
      <div className="navbar-start text-[#324B4C] dark:text-white">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu-compact dropdown-content mt-3 p-5 shadow w-52 bg-[#68807F] rounded-box"
          >
            <li>
              <Link to={location.pathname === "/about" ? "/" : "/about"}>
                <div className="flex items-center mr-1 group">
                  <div className="flex items-center p-1">
                    {location.pathname === "/about" ? (
                      <FiHome className=" text-white group-active:font-bold inline-block mr-1 md:m-1 group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50" />
                    ) : (
                      <FiUser className="text-[#324B4C] dark:text-white inline-block mr-1 md:m-1 group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50" />
                    )}
                    <span
                      className={`inline-block py-2 md:py-0 sm:hidden md:block ${
                        location.pathname === "/about" ? "text-white" : ""
                      } group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50`}
                    >
                      {location.pathname === "/about" ? "Home" : "About"}
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
            <Link to={location.pathname === "/portfolio" ? "/" : "/portfolio"}>
              <div className="flex items-center mr-1 group">
                <div className="flex items-center  p-1">
                  {location.pathname === "/portfolio" ? (
                    <FiHome className="text-white group-active:font-bold dark:text-white inline-block mr-1 md:m-1 group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50" />
                  ) : (
                    <FiFolder className="text-[#324B4C] dark:text-white inline-block mr-1 md:m-1 group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50" />
                  )}
                  <span
                    className={`inline-block py-2 md:py-0 sm:hidden md:block ${
                      location.pathname === "/portfolio" ? "text-white" : ""
                    } group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50`}
                  >
                    {location.pathname === "/portfolio" ? "Home" : "Portfolio"}
                  </span>
                </div>
              </div>
            </Link>
            </li>
            <li>
            <Link to={location.pathname === "/experience" ? "/" : "/experience"}>
              <div className="flex items-center mr-1 group">
                <div className="flex items-center  p-1">
                  {location.pathname === "/experience" ? (
                    <FiHome className="text-white group-active:font-bold dark:text-white inline-block mr-1 md:m-1 group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50" />
                  ) : (
                    <FiBriefcase className="text-[#324B4C] dark:text-white inline-block mr-1 md:m-1 group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50" />
                  )}
                  <span
                    className={`inline-block py-2 md:py-0 sm:hidden md:block ${
                      location.pathname === "/experience" ? "text-white" : ""
                    } group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50`}
                  >
                    {location.pathname === "/experience" ? "Home" : "Experience"}
                  </span>
                </div>
              </div>
            </Link>
            </li>
            <li>
              <div className="flex items-center mr-1">
                <FiEdit3 className="text-[#324B4C] dark:text-white inline-block mr-2" />
                <span className="inline-block py-2 md:py-0 sm:hidden md:block">
                  Blog
                </span>
              </div>
            </li>
            <li>
              <div className="flex items-center mr-1">
                <FiMail className="text-[#324B4C] dark:text-white inline-block mr-2" />
                <span className="inline-block py-2 md:py-0 sm:hidden md:block">
                  Contact
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex-1 gap-1">
        <Link
          to="/"
          className="normal-case text-2xl text-[#324B4C] dark:text-[#ECEFEF] font-bold"
        >
          <TbAt className="inline-block" />
          yie
        </Link>
      </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1">
          <li className='text-white'>
            <Link to={location.pathname === "/about" ? "/" : "/about"}>
              <div className="flex items-center mr-1 group">
                <div className="flex items-center p-1">
                  {location.pathname === "/about" ? (
                    <FiHome className="text-white group-active:font-bold inline-block mr-1 md:mr-2 group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50" />
                  ) : (
                    <FiUser className="text-[#324B4C] dark:text-white inline-block mr-1 md:mr-2 group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50" />
                  )}
                  <span
                    className={`inline-block py-2 md:py-0 sm:hidden md:block ${
                      location.pathname === "/about" ? "text-white" : "text-[#324B4C]"
                    } group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50 dark:text-white`}
                  >
                    {location.pathname === "/about" ? "Home" : "About"}
                  </span>
                </div>
              </div>
            </Link>
          </li>
          <li className='text-white'>
            <Link to={location.pathname === "/portfolio" ? "/" : "/portfolio"}>
              <div className="flex items-center mr-1 group">
                <div className="flex items-center p-1">
                  {location.pathname === "/portfolio" ? (
                    <FiHome className="text-white group-active:font-bold inline-block mr-1 md:mr-2 group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50" />
                  ) : (
                    <FiFolder className="text-[#324B4C] dark:text-white inline-block mr-1 md:mr-2 group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50" />
                  )}
                  <span
                    className={`inline-block py-2 md:py-0 sm:hidden md:block ${
                      location.pathname === "/portfolio" ? "text-white" : "text-[#324B4C]"
                    } group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50 dark:text-white`}
                  >
                    {location.pathname === "/portfolio" ? "Home" : "Portfolio"}
                  </span>
                </div>
              </div>
            </Link>
          </li>
          <li className='text-white'>
            <Link to={location.pathname === "/experience" ? "/" : "/experience"}>
              <div className="flex items-center mr-1 group">
                <div className="flex items-center p-1">
                  {location.pathname === "/experience" ? (
                    <FiHome className="text-white group-active:font-bold inline-block mr-1 md:mr-2 group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50" />
                  ) : (
                    <FiBriefcase className="text-[#324B4C] dark:text-white inline-block mr-1 md:mr-2 group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50" />
                  )}
                  <span
                    className={`inline-block py-2 md:py-0 sm:hidden md:block ${
                      location.pathname === "/experience" ? "text-white" : "text-[#324B4C]"
                    } group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50 dark:text-white`}
                  >
                    {location.pathname === "/experience" ? "Home" : "Career"}
                  </span>
                </div>
              </div>
            </Link>
          </li>
          <li className='text-white'>
            <Link to={location.pathname === "/blogs" ? "/" : "/blogs"}>
              <div className="flex items-center mr-1 group">
                <div className="flex items-center p-1">
                  {location.pathname === "/blogs" ? (
                    <FiHome className="text-white group-active:font-bold inline-block mr-1 md:mr-2 group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50" />
                  ) : (
                    <FiEdit3 className="text-[#324B4C] dark:text-white inline-block mr-1 md:mr-2 group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50" />
                  )}
                  <span
                    className={`inline-block py-2 md:py-0 sm:hidden md:block ${
                      location.pathname === "/blogs" ? "text-white" : "text-[#324B4C]"
                    } group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50 dark:text-white`}
                  >
                    {location.pathname === "/blogs" ? "Home" : "Blogs"}
                  </span>
                </div>
              </div>
            </Link>
          </li>
          <li className='text-white'>
            <Link to={location.pathname === "/contact" ? "/" : "/contact"}>
              <div className="flex items-center mr-1 group">
                <div className="flex items-center p-1">
                  {location.pathname === "/contact" ? (
                    <FiHome className="text-white group-active:font-bold inline-block mr-1 md:mr-2 group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50" />
                  ) : (
                    <FiMail className="text-[#324B4C] dark:text-white inline-block mr-1 md:mr-2 group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50" />
                  )}
                  <span
                    className={`inline-block py-2 md:py-0 sm:hidden md:block ${
                      location.pathname === "/contact" ? "text-white" : "text-[#324B4C]"
                    } group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50 dark:text-white`}
                  >
                    {location.pathname === "/contact" ? "Home" : "Contact"}
                  </span>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="gap-2 navbar-end">
        {/* <button className='mr-5 text-white' onClick={handleClick}>
            {props.theme === 'dark' ? (
              <FiSun className={`h-6 w-6 ${iconClicked ? 'icon-clicked' : ''}`} />
              ) : (
              <FiMoon className={`h-6 w-6 text-[#324B4C] ${iconClicked ? 'icon-clicked' : ''}`} />
            )}
        </button> */}
        <label className="swap swap-rotate text-black">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            checked={props.theme === "dark"}
            onChange={handleClick}
          />
          {/* sun icon */}
          <svg
            className={`swap-on fill-current w-7 h-7 dark:text-white ${iconClicked ? 'icon-clicked' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          <svg
            className={`swap-off fill-current w-7 h-7 text-[#324B4C] ${iconClicked ? 'icon-clicked' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>

        <button className="btn btn-sm gap-2 text-[#324B4C] bg-[#ECFEF4] hover:border-black hover:bg-transparent dark:hover:bg-[#889FA5] dark:hover:border-white dark:hover:text-[#fff] dark:text-[#324B4C] dark:border-white font-space-mono">
          RESUME
        </button>
      </div>
    </div>
  );
}

export default NavigationBar