import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub"

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
                    <ListItem button>
                        <ListItemIcon><GitHubIcon /></ListItemIcon>
                        <ListItemText primary="Text"></ListItemText>
                    </ListItem>
                </List>
        </Drawer>
    );

}

export default ProjectBar;