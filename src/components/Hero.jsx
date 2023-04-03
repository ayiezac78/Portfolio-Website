import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'
import '../assets/styles/blink-animation.css'
import { useSpring, animated } from '@react-spring/web';
import NavMenuLinks from './NavMenuLinks';


const Hero = () => {
  const animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });
  return (
    <animated.section style={animation} className='flex justify-center items-center'>
      <div className="grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center gap-5 md:gap-10 text-white p-10 md:py-20 md:px-10 overflow-hidden">
        <div>
          <p className="text-[#324B4C] mb-2 text-lg md:text-xl font-bold">Hi, my name is,</p>
          <h1 className="text-4xl md:text-7xl text-[#DADDE2] mb-3">Ariel Maniago<span className='relative lg:right-5 md:right-[21px] sm:right-[10px] blink font-bold'>|</span></h1>
          <h2 className="text-[#324B4C] text-2xl md:text-4xl mb-2">Front-end Developer</h2>
          <p className="text-[#324B4C] mb-5 text-lg md:text-xl font-bold">I design and build web apps.</p>
          <div className="flex md:flex-nowrap">
            <a href="https://github.com/ayiezac78" target="_blank" rel="noopener noreferrer">
              <FiGithub className="h-8 w-8 md:h-10 md:w-10 text-[#DADDE2] mr-3 mb-3 md:mb-0 hover:text-[#324B4C] transition duration-300 ease-in-out"/>
            </a>
            <a href="https://www.instagram.com/ayezac78/" target="_blank" rel="noopener noreferrer">
              <FiInstagram className="h-8 w-8 md:h-10 md:w-10 text-[#324B4C] mr-3 mb-3 md:mb-0 hover:text-[#DADDE2] transition duration-300 ease-in-out" />
            </a>
            <a href="https://www.linkedin.com/in/ayie/" target="_blank" rel="noopener noreferrer">
              <FiLinkedin className="h-8 w-8 md:h-10 md:w-10 text-[#DADDE2] mb-3 md:mb-0 hover:text-[#324B4C] transition duration-300 ease-in-out" />
            </a>
          </div>
        </div>
        <NavMenuLinks className="hidden md:block"/>
      </div>
    </animated.section>
  );
};

export default Hero;
