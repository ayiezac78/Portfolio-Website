import {FiMoon, FiSun,FiDownload} from 'react-icons/fi'
import { useState } from 'react';
import '../assets/styles/icon-animation.css'
import { Link } from 'react-router-dom';

const NavigationBar = (props) => {
  const [iconClicked, setIconClicked] = useState(false);

  const handleClick = () => {
    setIconClicked(!iconClicked); // toggle the state
    props.toggleMode(); // call the toggleMode function from props
  };
  return (
    <div className="navbar">
      <div className="flex-1">
        <Link to='/' className="normal-case text-3xl text-[#324B4C] dark:text-[#ECEFEF] font-extralight">ayie</Link>
      </div>
      <div className="flex-none">
      <button className='mr-5 text-white' onClick={handleClick}>
          {props.theme === 'dark' ? (
            <FiSun className={`h-6 w-6 ${iconClicked ? 'icon-clicked' : ''}`} />
            ) : (
            <FiMoon className={`h-6 w-6 text-[#324B4C] ${iconClicked ? 'icon-clicked' : ''}`} />
          )}
        </button>
          {/* <!-- this hidden checkbox controls the state --> */}
        <button className="transition duration-300 ease-in-out rounded-md px-3 py-2 border-2 border-[#324B4C] text-[#324B4C] hover:bg-[#324B4C] hover:text-white hover:border-white dark:hover:bg-[#889FA5] dark:hover:border-white dark:hover:text-[#000] dark:text-white dark:border-white">resume<FiDownload className='inline ml-2'/></button>
      </div>
    </div>
  )
}

export default NavigationBar