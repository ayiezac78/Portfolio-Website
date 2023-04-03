import React from 'react'
import { useSpring, animated } from '@react-spring/web';

const Footer = () => {
  const animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });
  return (
    <animated.footer style={animation} className="footer footer-center py-3 px-0 w-auto text-white mt-48">
      <div>
        <p>design & coded by ayie</p>
        <p>Copyright © 2023 - All right reserved.</p>
      </div>
    </animated.footer>
  )
}

export default Footer