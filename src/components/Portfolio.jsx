import { useSpring, animated } from "@react-spring/web";
import Cards from '../components/Cards';
import {BsFolder, BsGithub, BsBoxArrowUpRight} from 'react-icons/bs';

const Portfolio = () => {
  const animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  

  const cardData = [
    {
      link: "https://flowerplicity.netlify.app/",
      title: <a href="https://flowerplicity.netlify.app/" target="_blank" className="text-[#324B4C] hover:text-[#CEFBE3] active:text-[#324B4C]focus:outline-none focus:text-[#CEFBE3] transition-all duration-200 ease-in-out">Flowerplicity</a>,
      description: "It's a static web application that focus on a one-stop shop for flowers.",
      icon: <BsFolder className="w-10 h-10 text-[#CEFBE3]" />,
      github_icon: <a href="https://github.com/ayiezac78/flowerplicity.git" target="_blank" className="text-[#324B4C] hover:text-[#CEFBE3] active:text-[#324B4C]focus:outline-none focus:text-[#CEFBE3] transition-all duration-200 ease-in-out"><BsGithub className="w-5 h-5" /></a>,
      livesite_icon: <a href="https://flowerplicity.netlify.app/" target="_blank" className="text-[#324B4C] hover:text-[#CEFBE3] active:text-[#324B4C]focus:outline-none focus:text-[#CEFBE3] transition-all duration-200 ease-in-out"><BsBoxArrowUpRight className="w-5 h-5" /></a>,
      tags: ["Bootstrap 5", " JavaScript", " jQuery", " CSS", " HTML"],
    },
    {
      link: "https://clinicmp2.netlify.app/",
      title: <a href="https://clinicmp2.netlify.app/" target="_blank" className="text-[#324B4C] hover:text-[#CEFBE3] active:text-[#324B4C]focus:outline-none focus:text-[#CEFBE3] transition-all duration-200 ease-in-out">AWR cLinic</a>,
      description: "It's a full stack web application that focus on patient's online appointments.",
      icon: <BsFolder className="w-10 h-10 text-[#CEFBE3]" />,
      github_icon: <a href="https://github.com/ayiezac78/clinic.git" target="_blank" className="text-[#324B4C] hover:text-[#CEFBE3] active:text-[#324B4C]focus:outline-none focus:text-[#CEFBE3] transition-all duration-200 ease-in-out"><BsGithub className="w-5 h-5" /></a>,
      livesite_icon: <a href="https://clinicmp2.netlify.app/" target="_blank" className="text-[#324B4C] hover:text-[#CEFBE3] active:text-[#324B4C]focus:outline-none focus:text-[#CEFBE3] transition-all duration-200 ease-in-out"><BsBoxArrowUpRight className="w-5 h-5" /></a>,
      tags: ["Tailwind", " ReactJS", " Laravel", " Restful API", " MySQL"],
    },
    {
      link:"https://adminawrclinic.netlify.app/",
      title: <a href="https://adminawrclinic.netlify.app/" target="_blank" className="text-[#324B4C] hover:text-[#CEFBE3] active:text-[#324B4C]focus:outline-none focus:text-[#CEFBE3] transition-all duration-200 ease-in-out">AWR cLinic Admin Panel</a>,
      description: "It's a full stack web application that focus on managing patient's online appointments from AWR cLinic website.",
      icon: <BsFolder className="w-10 h-10 text-[#CEFBE3]" />,
      github_icon: <a href="https://github.com/ayiezac78/adminclinic.git" target="_blank" className="text-[#324B4C] hover:text-[#CEFBE3] active:text-[#324B4C]focus:outline-none focus:text-[#CEFBE3] transition-all duration-200 ease-in-out"><BsGithub className="w-5 h-5" /></a>,
      livesite_icon: <a href="https://adminawrclinic.netlify.app/" target="_blank" className="text-[#324B4C] hover:text-[#CEFBE3] active:text-[#324B4C]focus:outline-none focus:text-[#CEFBE3] transition-all duration-200 ease-in-out"><BsBoxArrowUpRight className="w-5 h-5" /></a>,
      tags: ["Tailwind", " ReactJS", " Laravel", " Restful API", " MySQL"],
    },
  ]
  return (
    <animated.section style={animation} className="">
      <h1 className="mt-[25rem] md:mb-1 sm:mb-10 md:text-3xl sm:text-2xl sm:text-center md:text-left text-[#324B4C] font-bold ">Some things I've built</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center md:gap-5 text-white md:py-20 lg:py-20 md:m-auto">
      {cardData.map((card, index) => (
        <a key={index} href={card.link} target="_black">
          <Cards
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
            github_icon= {card.github_icon}
            livesite_icon= {card.livesite_icon}
            tags = {card.tags}
          />
        </a>
        ))}
      </div>
    </animated.section>
  )
}

export default Portfolio