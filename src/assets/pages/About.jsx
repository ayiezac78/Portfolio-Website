import NavMenuLinks from '../../components/NavMenuLinks';
import { Link, useLocation } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';
import '../styles/blurbgnavbar.css'
import '../styles/blink-animation.css'
import Skills from '../../components/Skills';

const About = () => {
  const location = useLocation();
  const animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });
  return (
    <animated.section style={animation} className='py-10 md:py-20'>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-5 md:gap-10 text-white p-5 md:p-10 lg:p-20">
        <div className="relative">
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-[#324B4C] dark:text-white'>Self Overview</h1>
          <hr className='mb-5'/>
          <p className='mb-3'>Hi, my name is Ariel Maniago, and most of my friends call me ayie as my nickname. I'm a start-up Front-end Web Developer and, at the same time, a bootcamp product of <a className='link' href="https://kodego.ph/" target='blank'>Kodego</a> . I'd always curious to learn new tech trends especially when it comes to creative design. I'm also an ardent musician and a cinematographer enthusiast.<span className='blink'>|</span></p>
          <h2 className='text-xl font-bold text-[#324B4C] dark:text-white sm:mb-3'>Tech Stack:</h2>
            <div className='grid grid-cols-3 gap-4 text-[#324B4C] dark:text-white font-semibold'>
              <div className='text-normal mb-2'>Front-end</div>
              <div className='text-normal mb-2'>Back-end</div>
              <div className='text-normal mb-2'>Others</div>
            </div>
            <Skills/>
        </div>
        <NavMenuLinks className="hidden md:block"/>
      </div>
    </animated.section>
  );
};

export default About;
