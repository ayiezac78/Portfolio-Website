import meChat from '../images/undraw_person.svg'
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
    <animated.section style={animation} className='py-10 sm:py-32 md:py-32 lg:py-10 xl:py-20 mt-20'>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-5 md:gap-10 text-white sm:py-32 md:py-32 lg:py-32">
        <div className="relative">
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-[#324B4C] dark:text-white'>Self Overview</h1>
          <hr className='mb-5 border border-gray-500'/>
          <p className='mb-5 text-[#324B4C] dark:text-white'>Hi, I'm Ariel Maniago, and most of my friends they call me "ayie" as my nickname. I'm a start-up Web Developer and at the same time, a bootcamp graduate of <a className='link' href="https://kodego.ph/" target='blank'>Kodego</a>. I'm currently working as freelance with my colleagues, building with his current projects that will migrate into cloud focusing on different health clinics and laboratories. Aside from that, I'm always curious & eager to learn about new tech trends, especially when it comes to creative design. I'm also an ardent musician and a cinematographer enthusiast.<span className='blink'>|</span></p>
          <h2 className='text-xl font-bold text-[#324B4C] dark:text-white sm:mb-3'>Tech Stack:</h2>
          <div className='grid grid-cols-3 gap-4 text-[#324B4C] dark:text-white font-semibold text-center'>
            <div className='text-normal mb-2 mr-auto'>Front-end</div>
            <div className='text-normal mb-2'>Back-end</div>
            <div className='text-normal mb-2'>Others</div>
          </div>
          <Skills/>
        <p>Checkout my some portfolios</p>
        </div>
        <div>
          <img src={meChat} alt="bubble chat" className='w-80 h-80 md:block sm:hidden' />
        </div>
      </div>
    </animated.section>
  );
};

export default About;
