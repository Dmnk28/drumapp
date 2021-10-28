import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub"
import CodeIcon from "@mui/icons-material/Code"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"

const ProjectBar = () => {
    return (
        <Drawer sx={{
                    width: 300,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 300,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left">
                <List>
                    <ListItem button key="repository">
                        <ListItemIcon><CodeIcon /></ListItemIcon>
                        <ListItemText primary="Check Code at GitHub"></ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button key="github">
                        <ListItemIcon><GitHubIcon /></ListItemIcon>
                        <ListItemText primary="GitHub Profile"></ListItemText>
                    </ListItem>
                    <ListItem button key="portfolio">
                        <ListItemIcon><ArrowBackIcon /></ListItemIcon>
                        <ListItemText primary="Back to portfolio"></ListItemText>
                    </ListItem>
                </List>
        </Drawer>
    );

}

export default ProjectBar;