import {HiOutlineArrowLongRight} from 'react-icons/hi2'
import '../assets/styles/blink-animation.css'
import { useSpring, animated } from '@react-spring/web';
import { Link } from 'react-router-dom';

const Hero = () => {
  const animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });
  return (
    <animated.section style={animation} className="py-10 md:py-32 sm:py-28 min-h-screen hero">
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
          <Link to='/about' className='btn btn-sm btn-active dark:btn-outline btn-ghost outline outline-2 text-[#324B4C] gap-2'>About Me <HiOutlineArrowLongRight className='ml-2' size={20}/></Link>
        </div>
      </div>
    </animated.section>
  );
};

export default Hero;
