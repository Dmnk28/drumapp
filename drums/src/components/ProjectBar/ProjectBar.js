import { Button, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub"
import CodeIcon from "@mui/icons-material/Code"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import './styles/projectbar.css'
import projectLinks from "./_projectLinks";

const ProjectBar = () => {
    const [state, setState] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(open);
    }

    return (
        <React.Fragment key="projectbar" id="projectbar">
            <div id="button-div">
                <IconButton onClick={toggleDrawer(true)}><DoubleArrowIcon></DoubleArrowIcon></IconButton>
            </div>
            <Drawer sx={{
                    width: 300,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 300,
                        boxSizing: 'border-box',
                    },
                    }}
                anchor="left"
                open={state}
                onClose={toggleDrawer(false)}
            >
                <List>
                    <a className="pbar-link" href={projectLinks.repository} target="_blank">
                        <ListItem button key="repository">
                            <ListItemIcon><CodeIcon /></ListItemIcon>
                            <ListItemText primary="Check Code at GitHub"></ListItemText>
                        </ListItem>
                    </a>
                    <Divider />
                    <a className="pbar-link" href="https://github.com/Dmnk28" target="_blank">
                        <ListItem button key="github">
                            <ListItemIcon><GitHubIcon /></ListItemIcon>
                            <ListItemText primary="GitHub Profile"></ListItemText>
                        </ListItem>
                    </a>
                    <a className="pbar-link" href="https://do-webdev.de" target="_self">
                        <ListItem button key="portfolio">
                            <ListItemIcon><ArrowBackIcon /></ListItemIcon>
                            <ListItemText primary="Back to portfolio"></ListItemText>
                        </ListItem>
                    </a>
                </List>
            </Drawer>
        </React.Fragment>
    );

}

export default ProjectBar;