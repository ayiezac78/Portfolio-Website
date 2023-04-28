import {FiInstagram, FiLinkedin } from 'react-icons/fi'
import {GoMarkGithub} from 'react-icons/go'
import '../assets/styles/blink-animation.css'
import { useSpring, animated } from '@react-spring/web';
import meImg from '../assets/images/me.jpg'

const Hero = () => {
  const animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });
  return (
    <animated.section style={animation} className="py-10 md:py-32 sm:py-28 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-1 place-content-center place-items-center gap-5 md:gap-10 text-white p-5 sm:py-32 md:py-32 lg:py-32 h-full">
        <div className="flex flex-col lg:justify-center lg:items-center ">
          <p className="text-[#324B4C] mb-2 text-lg md:text-xl font-bold dark:text-white">
            Hi, my name is
          </p>
          <h1 className="text-4xl text-[#324B4C] md:text-7xl mb-3 dark:text-white">
            Ariel Maniago
            <span className="relative lg:right-5 md:right-[21px] sm:right-[10px] blink font-bold">
              |
            </span>
          </h1>
          <h2 className="text-gray-600 text-xl md:text-4xl mb-2 dark:text-white">
            I build things for the web.
          </h2>
          <p className='text-[#324B4C] mb-5 dark:text-white'>I am a web developer that passionate about building beautiful and functional web applications.</p>
          <div className="flex md:flex-nowrap">
            <a
              href="https://github.com/ayiezac78"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoMarkGithub className="h-8 w-8 md:h-10 md:w-10 mr-3 text-[#324B4C] mb-3 md:mb-0 dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition duration-300 ease-in-out" />
            </a>
            <a
              href="https://www.instagram.com/ayezac78/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram className="h-8 w-8 md:h-10 md:w-10 text-[#324B4C] mr-3 mb-3 md:mb-0 dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition duration-300 ease-in-out" />
            </a>
            <a
              href="https://www.linkedin.com/in/ayie/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin className="h-8 w-8 md:h-10 md:w-10 text-[#324B4C] mb-3 md:mb-0 dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition duration-300 ease-in-out" />
            </a>
          </div>
        </div>
      </div>
    </animated.section>
  );
};

export default Hero;
