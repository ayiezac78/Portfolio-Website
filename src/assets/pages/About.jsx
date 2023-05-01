import meChat from "../images/me.jpeg";
import { Link } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import "../styles/blurbgnavbar.css";
import "../styles/blink-animation.css";
import Skills from "../../components/Skills";
import { HiOutlineFolder } from "react-icons/hi";
import "../styles/card.css";

const About = () => {
  const animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });
  return (
    <animated.section style={animation} className="hero min-h-screen w-full px-4 pt-64 md:pt-0 grid grid-cols-1 sm:grid-cols-2 place-items-center gap-4 text-white">
        <div className="relative text-justify sm:text-left">
          <h1 className="text-2xl md:text-3xl font-bold mb-5 text-[#324B4C] dark:text-white mt-14">
            Self Overview
          </h1>
          <hr className="mb-5 border border-gray-500" />
          <p className="mb-5 text-[#324B4C] dark:text-white">
            Hi, I'm Ariel Maniago, and most of my friends they call me "ayie" as
            my nickname. I'm a start-up Web Developer focusing on web designing and at the same time, a
            bootcamp graduate of{" "}
            <a className="link" href="https://kodego.ph/" target="blank">
              Kodego
            </a>
            . I'm currently working as freelance with my colleagues, building
            with his current projects that will migrate into cloud focusing on
            different health clinics and laboratories. Aside from that, I'm
            always curious & eager to learn about new tech trends, especially
            when it comes to creative design. I'm also an ardent musician and a
            cinematographer enthusiast.<span className="blink">|</span>
          </p>
          <h2 className="text-xl font-bold text-[#324B4C] dark:text-white sm:mb-3">
            Tech Stack:
          </h2>
          <div className="grid grid-cols-3 gap-4 text-[#324B4C] dark:text-white font-semibold text-center">
            <div className="text-normal mb-2 mr-auto">Front-end</div>
            <div className="text-normal mb-2">Back-end</div>
            <div className="text-normal mb-2">Others</div>
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
        <div className="image-container absolute top-42 right-10 lg:right-32 hidden md:block ">
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
        {/* <div>
          <img src={meChat} alt="bubble chat" className='w-80 rounded-lg hover:opacity-100 transition ease-in-out duration-100 md:block sm:hidden opacity-70 object-contain hover:-translate-y-2 hover:-translate-x-2 hover:border-b-4 hover:border-r-4 border-b-slate-500 border-r-slate-500 border-dashed' />
        </div> */}