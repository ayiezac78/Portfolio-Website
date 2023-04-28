import {FiMoon, FiSun,FiDownload} from 'react-icons/fi'
import {TbAt} from 'react-icons/tb'
import { useState, useEffect } from 'react';
import '../assets/styles/blurbgnavbar.css'
import { Link } from 'react-router-dom';
import NavMenuLinks from './NavMenuLinks';

const NavigationBar = (props) => {
  const [iconClicked, setIconClicked] = useState(false);

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
    <div className="navbar w-full fixed top-0 left-0 px-4 z-10">
      <div className="flex-1 gap-1">
        <Link
          to="/"
          className="normal-case text-2xl text-[#324B4C] dark:text-[#ECEFEF] font-bold"
        >
          <TbAt className="inline-block" />
          yie
        </Link>
        <NavMenuLinks className="hidden md:block" />
      </div>
      <div className="flex-none gap-2">
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

        <button className="btn btn-sm gap-2 text-slate-50 border-black hover:border-black hover:bg-[#889FA5] dark:hover:bg-[#889FA5] dark:hover:border-white dark:hover:text-[#fff] dark:text-white dark:border-white font-space-mono">
          RESUME
        </button>
      </div>
    </div>
  );
}

export default NavigationBar