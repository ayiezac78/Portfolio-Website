import React, { useEffect } from 'react'
import { useSpring, animated } from '@react-spring/web';

const Blog = () => {

  const animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <animated.div style={animation} className="hero min-h-screen text-[#324B4C] dark:text-white">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">SOON TM!</h1>
          <p className="py-6 font-bold">
            "The only way to do great work is to love what you do." - Steve Jobs
          </p>
        </div>
      </div>
    </animated.div>
  )
}

export default Blog