import { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import HomePage from "../../pages/HomePage/HomePage";

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
                <Box sx={{ p: 1 }}>
                    {children}
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
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
    };
}

const TabNav = (props) => {
    const [value, setValue] = useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Box sx={{ bgcolor: "background.paper" }}>
                <AppBar position="static">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        aria-label="tabs"
                        sx={{ padding: "0 1rem" }}
                    >
                        <Tab label="Home" {...a11yProps(0)} />
                        <Tab label="cool" {...a11yProps(1)} />
                        <Tab label="contact" {...a11yProps(2)} />
                        <Tab label="projects" {...a11yProps(3)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0} >
                    <HomePage />
                </TabPanel>
                <TabPanel value={value} index={1} >
                    <p>cool</p>

                </TabPanel>
                <TabPanel value={value} index={2} >
                    <p>contact</p>
                </TabPanel>
                <TabPanel value={value} index={3} >
                    <p>projects</p>
                </TabPanel>
            </Box>
        </div>
    );
};

export default TabNav;
