import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

const Lists = () => {
  return (
    <div className=" px-4">
      <div>
        <h1>Latest products</h1>
      </div>
      <div>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Soja & Co. Eucalyptus"
              secondary="Updated Mar 8, 2024"
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Necessaire Body Lotion"
              secondary="Updated Mar 8, 2024"
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Ritual of Sakura"
              secondary="JuUpdated Mar 8, 2024"
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="
Lancome Rouge"
              secondary="JuUpdated Mar 8, 2024"
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Erbology Aloe Vera"
              secondary="JuUpdated Mar 8, 2024"
            />
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default Lists;
