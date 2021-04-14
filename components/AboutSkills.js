import React, { Fragment } from "react";
import aboutStyles from "../styles/about.module.css";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs({ skillTech }) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={aboutStyles.skills}>
      <h1 className={aboutStyles.killsH1}>Skills</h1>
      <div className={aboutStyles.rootSkills}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Front-End" {...a11yProps(0)} />
            <Tab label="Back-End" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            {skillTech.skills.frontend.map((skill, id) => (
              <Fragment key={id}>
                <span className={aboutStyles.pSkills}>{skill}</span>
                <br />
              </Fragment>
            ))}
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            {skillTech.skills.backend.map((skill, id) => (
              <Fragment key={id}>
                <span className={aboutStyles.pSkills}>{skill}</span>
                <br />
              </Fragment>
            ))}
          </TabPanel>
        </SwipeableViews>
      </div>
    </div>
  );
}
