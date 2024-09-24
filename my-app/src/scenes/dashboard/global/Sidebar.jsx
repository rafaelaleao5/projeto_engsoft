import React from "react";
import { Box, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  // Função para alternar a visibilidade da Sidebar
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // Itens da Sidebar
  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <InfoOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <ContactMailOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <SettingsOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {/* Botão para abrir o menu */}
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer}
        sx={{ ml: 2 }}
      >
        <MenuIcon />
      </IconButton>

      {/* Drawer: Sidebar que aparece do lado esquerdo */}
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
        {list}
      </Drawer>
    </div>
  );
};

export default Sidebar;
