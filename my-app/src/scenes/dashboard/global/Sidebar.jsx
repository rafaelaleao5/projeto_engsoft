import React from "react";
import { Box, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddCardIcon from '@mui/icons-material/AddCard';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate()

  const GoToHome = () => {
    navigate("/Menu")}
  const Exit = () => {
      navigate("/")}
const Pagamento = () => {
        navigate("/Pagamento")}
const TiposGastos = () => {
          navigate("/TipoGastos")}


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
          <ListItemText primary="Home" onClick={GoToHome}/>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <AddCardIcon />
          </ListItemIcon>
          <ListItemText primary="Formas de Pagamento" onClick={Pagamento} />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <AddShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Tipos de Gastos" onClick={TiposGastos}/>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <SettingsOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Exit" onClick={Exit} />
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
