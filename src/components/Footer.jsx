import React from 'react'
import { useSpring, animated } from '@react-spring/web';

const Footer = () => {
  const animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });
  return (
    <div style={animation} className="footer footer-center p-4 text-[#324B4C] dark:text-white">
      <div>
        <p>design & coded by ayie©</p>
      </div>
    </div>
  )
}

export default Footer