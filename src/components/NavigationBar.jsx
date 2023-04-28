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
        <Link to='/' className="normal-case text-2xl text-[#324B4C] dark:text-[#ECEFEF] font-bold"><TbAt className='inline-block'/>yie</Link>
        <NavMenuLinks className="hidden md:block"/>
      </div>
      <div className="flex-none">
      <button className='mr-5 text-white' onClick={handleClick}>
          {props.theme === 'dark' ? (
            <FiSun className={`h-6 w-6 ${iconClicked ? 'icon-clicked' : ''}`} />
            ) : (
            <FiMoon className={`h-6 w-6 text-[#324B4C] ${iconClicked ? 'icon-clicked' : ''}`} />
          )}
        </button>
        <button className="btn btn-ghost btn-sm gap-2 text-black border-black hover:border-black hover:bg-[#5C608E] bg-[#75758C] dark:hover:bg-[#889FA5] dark:hover:border-white dark:hover:text-[#000] dark:text-black dark:border-white">RESUME</button>
      </div>
    </div>
  )
}

export default NavigationBar