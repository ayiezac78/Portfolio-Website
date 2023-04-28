import meChat from "../images/me.jpeg";
import { Link, useLocation } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import "../styles/blurbgnavbar.css";
import "../styles/blink-animation.css";
import Skills from "../../components/Skills";
import { HiOutlineFolder } from "react-icons/hi";
import "../styles/card.css";

const About = () => {
  const location = useLocation();
  const animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });
  return (
    <animated.section style={animation} className="md:py-32 lg:py-10 xl:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-2 md:gap-10 text-white sm:py-32 md:py-32 lg:py-32 mt-44">
        <div className="relative">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-[#324B4C] dark:text-white">
            Self Overview
          </h1>
          <hr className="mb-5 border border-gray-500" />
          <p className="mb-5 text-[#324B4C] dark:text-white">
            Hi, I'm Ariel Maniago, and most of my friends they call me "ayie" as
            my nickname. I'm a start-up Web Developer and at the same time, a
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
          <div>
            <p className="text-[#324B4C] dark:text-slate-50">
              Checkout my recent{" "}
              <Link className="link">
                <HiOutlineFolder className="inline-block mr-1" />
                Portfolio
              </Link>
            </p>
          </div>
        </div>
        {/* <div>
          <img src={meChat} alt="bubble chat" className='w-80 rounded-lg hover:opacity-100 transition ease-in-out duration-100 md:block sm:hidden opacity-70 object-contain hover:-translate-y-2 hover:-translate-x-2 hover:border-b-4 hover:border-r-4 border-b-slate-500 border-r-slate-500 border-dashed' />
        </div> */}
        <div class="image-container">
          <img
            src={meChat}
            alt="your-image-description"
            className="w-80 sm:hidden md:block rounded-lg hover:shadow-lg"
          />
        </div>
      </div>
    </animated.section>
  );
};

export default About;
