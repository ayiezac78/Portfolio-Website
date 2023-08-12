import meChat from "../images/me.jpeg";
import { Link } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import "../styles/blurbgnavbar.css";
import "../styles/blink-animation.css";
import Skills from "../../components/Skills";
import { HiOutlineFolder } from "react-icons/hi";
import "../styles/card.css";
import { useEffect } from "react";

const About = () => {
  const animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <animated.section style={animation} className="w-full px-4 pt-16 md:pt-10 sm:pt-36 grid grid-cols-1 sm:grid-cols-2 place-items-center gap-4 text-white">
        <div className="relative text-left sm:text-left">
          <h1 className="text-2xl md:text-3xl font-bold mb-5 text-[#324B4C] dark:text-white pt-36">
            Self Overview
          </h1>
          <hr className="mb-5 border border-gray-500" />
          <p className="mb-5 text-[#324B4C] dark:text-white">
          Hi, I'm Ariel Maniago, and most of my friends call me "Ayie" as my nickname. I'm a start-up web developer focused on web design and a bootcamp graduate of{" "}
            <a className="link" href="https://kodego.ph/" target="blank">
              Kodego
            </a>
            . Currently, I'm working as a freelancer with my colleagues, building their current projects that will migrate to the cloud, focusing on different health clinics and laboratories. Aside from that, I'm always curious and eager to learn about new tech trends, especially in creative design. Additionally, I'm an ardent musician and a cinematography enthusiast.<span className="blink">|</span>
          </p>
          <h2 className="text-xl font-bold text-[#324B4C] dark:text-white sm:mb-3">
            Tech Stack:
          </h2>
          <div className="grid grid-cols-3 gap-4 text-[#324B4C] dark:text-white font-semibold text-center">
            <div className="mb-2 mr-auto">Front-end</div>
            <div className="mb-2">Back-end</div>
            <div className="mb-2">Others</div>
          </div>
          <Skills />
          <div className="mb-10">
            <p className="text-[#324B4C] dark:text-slate-50">
              Checkout my recent{" "}
              <Link to="/portfolio" className="link link-hover">
                <HiOutlineFolder className="inline-block mr-1" />
                Portfolio
              </Link>
            </p>
          </div>
        </div>
        <div className="image-container absolute md:top-52 right-10 lg:right-32 hidden md:block ">
          <img
            src={meChat}
            alt="your-image-description"
            className="w-80 rounded-lg hover:shadow-lg"
          />
        </div>
    </animated.section>
  );
};

export default About;