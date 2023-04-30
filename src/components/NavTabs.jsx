import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className="font-space-mono"
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

  return (
    <div className="py-32 grid place-items-center">
      <h1 className=" text-[#324B4C] font-bold dark:text-slate-50 text-2xl lg:text-4xl sm:py-10 md:py-0">
        Career History
      </h1>
      <Box className="w-full  text-black flex justify-center items-center md:flex sm:block">
        <Box className="flex flex-row overflow-x-auto">
          <Tabs
            orientation={smallScreen ? "vertical" : "horizonal"}
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            TabIndicatorProps={{
              style: {
                backgroundColor: "#324B4C"
              }
            }}
            textColor="#324B4C"
            aria-label="scrollable force tabs example"
          >
            <Tab label={<span className="font-space-mono">GNP1 Marketing</span> } {...a11yProps(0)} />
            <Tab label={<span className="font-space-mono">Island Living Channel</span> } {...a11yProps(1)} />
            <Tab label={<span className="font-space-mono">Negros Women for Tomorrow Foundation, Inc.</span> } {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </div>
  );
}
