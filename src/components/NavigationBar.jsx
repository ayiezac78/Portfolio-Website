import {FiMoon, FiSun,FiDownload} from 'react-icons/fi'
import {TbAt} from 'react-icons/tb'
import { useState, useEffect } from 'react';
import '../assets/styles/blurbgnavbar.css'
import { Link } from 'react-router-dom';

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
      <div className="flex-1">
        <Link to='/' className="normal-case text-3xl text-[#324B4C] dark:text-[#ECEFEF] font-extralight"><TbAt className='inline-block'/>yie</Link>
      </div>
      <div className="flex-none">
      <button className='mr-5 text-white' onClick={handleClick}>
          {props.theme === 'dark' ? (
            <FiSun className={`h-6 w-6 ${iconClicked ? 'icon-clicked' : ''}`} />
            ) : (
            <FiMoon className={`h-6 w-6 text-[#324B4C] ${iconClicked ? 'icon-clicked' : ''}`} />
          )}
        </button>
        <button className="transition duration-300 ease-in-out rounded-md px-3 py-2 border-2 border-[#324B4C] text-[#324B4C] hover:bg-[#324B4C] hover:text-white hover:border-white dark:hover:bg-[#889FA5] dark:hover:border-white dark:hover:text-[#000] dark:text-white dark:border-white">CV<FiDownload className='inline ml-2'/></button>
      </div>
    </div>
  )
}

export default NavigationBar