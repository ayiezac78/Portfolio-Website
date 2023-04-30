import React, { useState } from 'react'
import { useSpring, animated } from "@react-spring/web";
import {FiArrowRightCircle} from 'react-icons/fi'

const Tab = ({ title, active, onClick }) => (
  <button
    className={`${
      active
        ? " md:border-l-[3px] sm:border-b-[3px] md:border-b-0 border-white bg-transparent text-gray-900 hover:bg-gray-400"
        : " bg-transparent text-gray-900 hover:bg-gray-400"
    } py-2 px-2 md:block w-full text-left focus:outline-none`}
    onClick={onClick}
  >
    {title}
  </button>
  
);



const Experience = () => {

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };

  const animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const contentItems = [
    {
      title: <p className='font-bold'>GNP1 Marketing</p>,
      job: "job1",
      content: "This is the content for Tab 1",
    },
    {
      title: <p className='font-bold'>Island Living Channel</p> ,
      job: <p><span className='text-[#324B4C]'>Freelance Videographer</span>  <a href="https://nwtf.org.ph/" className="text-[#CEFBE3]">@ Island Living Channel</a></p>,
      content:
              <ul>
                <li><FiArrowRightCircle className='inline-block mr-2'/>Taking video clips of different events and sceneries.</li>
                <li><FiArrowRightCircle className='inline-block mr-2'/>Assisting Lead Videographer of different tools in videography</li>
              </ul>,
      year: "January - April 2019"
    },
    {
      title: <p className='font-bold'>NWTF</p> ,
      job: <p><span className='text-[#324B4C]'>Loan Officer</span>  <a href="https://nwtf.org.ph/" className="text-[#384B41]">@ Negros Women for Tomorrow Foundation, Inc.</a></p>,
      content:
              <ul>
                <li><FiArrowRightCircle className='inline-block mr-2'/>Process Loan Application</li>
                <li><FiArrowRightCircle className='inline-block mr-2'/>Montly reportings of loan portfolios</li>
                <li><FiArrowRightCircle className='inline-block mr-2'/>Conducting center meetings in different areas.</li>
                <li><FiArrowRightCircle className='inline-block mr-2'/>Markets of different products of the company including productive and non-productive</li>
              </ul>,
      year: "October 2016 - January 2019"
    },
  ];
  return (
    <animated.section
      style={animation}
      className="grid place-items-center min-h-screen lg:h-screen md:h-screen sm:h-0 mb-4 p-4 lg:py-32 md:py-32 sm:py-32 overflow-y-auto"
    >
      <h1 className=" text-[#324B4C] font-bold dark:text-slate-50 text-2xl lg:text-4xl sm:py-10 md:py-0">
        Career History
      </h1>
      <div className="flex flex-col h-full">
        <div className="flex-1 flex md:flex-row-reverse lg:flex-row sm:flex-col-reverse">
          <div className="w-full lg:w-1/3 md:w-1/5 order-last lg:order-first md:block sm:flex">
            {contentItems.map((item, index) => (
              <Tab
                key={index}
                title={item.title}
                active={activeTabIndex === index}
                onClick={() => handleTabClick(index)}
              />
            ))}
          </div>
          <div className="w-full md:w-3/3 p-4 text-black">
            <h1 className="text-xl font-bold mb-2">{contentItems[activeTabIndex].job}</h1>
            <p className='mb-4'>{contentItems[activeTabIndex].year}</p>
            <p>{contentItems[activeTabIndex].content}</p>
          </div>
        </div>
      </div>
    </animated.section>
  );
}

export default Experience