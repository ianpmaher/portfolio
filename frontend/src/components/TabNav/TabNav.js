import { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Projects from "../Projects/Projects";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
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
        id: `tab-${index}`,
        "aria-controls": `tabpanel-${index}`,
    };
}

const TabNav = (props) => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Box sx={{ bgcolor: "background.paper" }}>
                <AppBar position="sticky" sx={{width: "50vw", m: "0 auto", borderRadius: "20px", bgcolor: 'secondary.main'}} > 
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        aria-label="tabs"
                        variant="fullWidth"
                        centered
                        sx={{ padding: "0 0.5rem" }}
                        // selectionFollowsFocus
                        
                    >
                        <Tab label="Home" {...a11yProps(0)} />
                        <Tab label="cool" {...a11yProps(1)} />
                        <Tab label="Contact Long" {...a11yProps(2)} />
                        <Tab label="RESUME" {...a11yProps(3)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0} >
                    <Projects />
                </TabPanel>
                <TabPanel value={value} index={1} >
                    <p>cool</p>

                </TabPanel>
                <TabPanel value={value} index={2} >
                    <p>Contact Long Form</p>
                </TabPanel>
                <TabPanel value={value} index={3} >
                    <p>RESUME</p>
                </TabPanel>
            </Box>
        </div>
    );
};

export default TabNav;
