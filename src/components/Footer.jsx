import {FiInstagram, FiLinkedin } from 'react-icons/fi'
import {GoMarkGithub} from 'react-icons/go'
import { useSpring, animated } from '@react-spring/web';

const Footer = () => {
  const animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });
  return (
    <div
      style={animation}
      className="footer footer-center p-4 text-[#324B4C] dark:text-white"
    >
      <div>
      <div className="flex md:flex-nowrap">
        <a
          href="https://github.com/ayiezac78"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GoMarkGithub className="h-4 w-4 md:h-5 md:w-5 mr-3 text-[#324B4C] mb-3 md:mb-0 dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition duration-300 ease-in-out" />
        </a>
        <a
          href="https://www.instagram.com/ayezac78/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiInstagram className="h-4 w-4 md:h-5 md:w-5 text-[#324B4C] mr-3 mb-3 md:mb-0 dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition duration-300 ease-in-out" />
        </a>
        <a
          href="https://www.linkedin.com/in/ayie/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin className="h-4 w-4 md:h-5 md:w-5 text-[#324B4C] mb-3 md:mb-0 dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition duration-300 ease-in-out" />
        </a>
      </div>
        <p>design & coded by ayie©</p>
      </div>
    </div>
  );
}

export default Footer