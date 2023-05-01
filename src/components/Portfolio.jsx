import { useState } from 'react';
import { useSpring, animated } from "@react-spring/web";
import Cards from '../components/Cards';
import {BsFolder, BsGithub, BsBoxArrowUpRight} from 'react-icons/bs';

const Portfolio = () => {
  const animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.section style={animation} className="py-32 md:py-0">
        <h1 className="text-center md:text-left mt-8 mb-4 md:mt-[16rem] text-4xl text-[#324B4C] font-bold dark:text-slate-50">
          Archives
        </h1>
      <div className='md:pt-0'>
          <Cards/>
      </div>
    </animated.section>
  );
}

export default Portfolio