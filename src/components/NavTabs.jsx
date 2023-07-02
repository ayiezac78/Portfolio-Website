import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className="font-space-mono w-full dark:text-white"
    >
      {value === index && (
        <Box className=" p-4">
          <Typography sx={{fontFamily:"'Space Mono', monospace" }}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const smallScreen = useMediaQuery(`(min-width: 768px)`);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.section style={animation} className="mt-40 py-40 grid place-items-center">
      <h1 className=" text-[#324B4C] mb-3 md:mb-0 font-bold dark:text-slate-50 text-2xl md:text-4xl py-10 md:py-10">
        Career History
      </h1>
      <Box className="max-w-[700px] text-black justify-center items-center md:flex block">
        <Box className="flex flex-row max-w-[22rem]">
          <Tabs
            orientation={smallScreen ? "vertical" : "horizonal"}
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            TabIndicatorProps={{
              style: {
                backgroundColor: "#CEF6FF",
                width: '2px',
              }
            }}
            className="md:border-r-[1px] md:border-b-0 border-b-[1px] border-r-slate-500 border-b-slate-500"
            textColor="#324B4C"
            aria-label="scrollable force tabs example"
          >
            <Tab className="hover:bg-[#7F928E] transition-all duration-200 ease-in-out" label={<span className="font-space-mono dark:text-white">Cenix</span> } {...a11yProps(0)} />
            <Tab className="hover:bg-[#7F928E] transition-all duration-200 ease-in-out" label={<span className="font-space-mono dark:text-white">Kodego</span> } {...a11yProps(1)} />
            <Tab className="hover:bg-[#7F928E] transition-all duration-200 ease-in-out" label={<span className="font-space-mono dark:text-white">Safeguard DNA Diagnostics, Inc.</span> } {...a11yProps(2)} />
            <Tab className="hover:bg-[#7F928E] transition-all duration-200 ease-in-out" label={<span className="font-space-mono dark:text-white">GNP1 Marketing</span> } {...a11yProps(3)} />
            <Tab className="hover:bg-[#7F928E] transition-all duration-200 ease-in-out" label={<span className="font-space-mono dark:text-white">Island Living Channel</span> } {...a11yProps(4)} />
            <Tab className="hover:bg-[#7F928E] transition-all duration-200 ease-in-out" label={<span className="font-space-mono dark:text-white">Negros Women for Tomorrow Foundation, Inc.</span> } {...a11yProps(5)} />
            <Tab className="hover:bg-[#7F928E] transition-all duration-200 ease-in-out" label={<span className="font-space-mono dark:text-white">Binalbagan Catholic College</span> } {...a11yProps(6)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
        <p className="mb-2 text-xl font-bold"><span className='text-[#324B4C] dark:text-white'>Front-end Web Developer</span> <a href="https://kodego.ph/" className=" link link-hover dark:text-white">@ Cenix BPO Web Development Services</a></p>
            <p className="mb-5 text-sm">June 2023 - Present</p>
              <ul>
                <li className=" before:content-['ᐉ']"> Maintaining and updating current websites.</li>
                <li className=" before:content-['ᐉ']"> Collaborates with the group of SEO & Content Writing team via Trello</li>
                <li className=" before:content-['ᐉ']"> Web Crawling using Screaming Frog SEO Spider App and uploads XML file to Google Search Console.</li>
              </ul>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <p className="mb-2 text-xl font-bold"><span className='text-[#324B4C] dark:text-white'>Bootcamp Graduate</span> <a href="https://kodego.ph/" className=" link link-hover dark:text-white">@ Kodego</a></p>
            <p className="mb-5 text-sm">December 2022 - April 2023</p>
              <ul>
                <li className=" before:content-['ᐉ']"> Database administration and website design</li>
                <li className=" before:content-['ᐉ']"> Collaborates with the group for wireframe creation</li>
                <li className=" before:content-['ᐉ']"> Developed a RESTful API to facilitate communication between the front-end and back-end systems, enabling seamless integration of data and improved user experience</li>
                <li className=" before:content-['ᐉ']"> Providing leadership and mentoring co-trainee through code collaboration and knowledge shares.</li>
              </ul>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <p className="mb-2 text-xl font-bold"><span className='text-[#324B4C] dark:text-white'>Medical Encoder</span> @ Safeguard DNA Diagnostics, Inc.</p>
            <p className="mb-5 text-sm">January 2021 - February 2023</p>
              <ul>
                <li className=" before:content-['ᐉ']"> Encoding and uploading patient information and laboratory results onto the laboratory's database through a web application system</li>
                <li className=" before:content-['ᐉ']"> Outbound calls to patients to verify their basic information for contact tracing purposes</li>
                <li className=" before:content-['ᐉ']"> Consolidating and verifying patient information & patient laboratory results in the CDRS report before submitting it to the Department of Health (DOH)</li>
              </ul>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <p className="mb-2 text-xl font-bold"><span className='text-[#324B4C] dark:text-white'>Field Auditor</span> @ GNP1 Marketing</p>
            <p className="mb-5 text-sm">June 2019 - March 2020</p>
              <ul>
                <li className=" before:content-['ᐉ']"> Conducted field audits to ensure accountability of daily sales personnel and visited stores to audit client interactions</li>
                <li className=" before:content-['ᐉ']"> Conducted outbound call audits of existing clients</li>
                <li className=" before:content-['ᐉ']"> Conducted monthly audits & reports of the warehouse and monitored remittances to ensure accuracy and balance</li>
              </ul>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <p className="mb-2 text-xl font-bold"><span className='text-[#324B4C] dark:text-white'>Freelance Videographer</span> @ Island Living Channel</p>
          <p className="mb-5 text-sm">January - April 2019</p>
            <ul>
              <li className=" before:content-['ᐉ']"> Capturing video clips of various events and scenic locations</li>
              <li className=" before:content-['ᐉ']"> Assisted the Lead Videographer in using various tools for videography</li>
            </ul>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <p className="mb-2 text-xl font-bold"><span className='text-[#324B4C] dark:text-white'>Loan Officer</span>  <a href="https://nwtf.org.ph/" className="link link-hover dark:text-white">@ Negros Women for Tomorrow Foundation, Inc.</a></p>
          <p className="mb-5 text-sm">October 2016 - January 2019</p>
            <ul>
              <li className=" before:content-['ᐉ']"> Processed client's loan applications, reviewing documentation and conducting interviews to determine eligibility and make lending decisions</li>
              <li className=" before:content-['ᐉ']"> Monthly reporting of loan portfolios & loan disbursements</li>
              <li className=" before:content-['ᐉ']"> Conducting weekly meetings at various centers and collecting weekly repayments in different areas</li>
              <li className=" before:content-['ᐉ']"> Markets various products, including both productive and non-productive loans</li>
            </ul>
        </TabPanel>
        <TabPanel value={value} index={6}>
          <p className="mb-2 text-xl"><span className='text-[#324B4C] dark:text-white'>BS Information Technology</span> @ Binalbagan Catholic College</p>
          <p className="mb-5 text-sm">June 2011 - April 2015</p>
          <ul>
              <li className=" before:content-['ᐉ']"> I have extensive experience studying various disciplines within the field of Information Technology, with a particular emphasis on computer network systems, programming, and multimedia.</li>
            </ul>
        </TabPanel>
      </Box>
    </animated.section>
  );
}
