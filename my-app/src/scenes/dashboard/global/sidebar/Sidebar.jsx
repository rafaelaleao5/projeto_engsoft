import React from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddCardIcon from '@mui/icons-material/AddCard';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from 'react-router-dom';

// Estilizações
const SidebarContainer = styled(Box)(({ theme }) => ({
  width: 250,
  height: "100%", // Defina a altura para ocupar toda a área disponível
  backgroundColor: '#1c044c', // Cor de fundo alterada para roxo
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  color: 'white', // Cor do texto alterada para branco
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { text: "Home", icon: <HomeOutlinedIcon sx={{ color: 'white' }} />, path: "/Menu" },
    { text: "Formas de Pagamento", icon: <AddCardIcon sx={{ color: 'white' }} />, path: "/Pagamento" },
    { text: "Categoria", icon: <AddShoppingCartIcon sx={{ color: 'white' }} />, path: "/TipoGastos" },
    { text: "Adicionar Transação", icon: <AddCardIcon sx={{ color: 'white' }} />, path: "/Gastos" },
    { text: "Exit", icon: <ExitToAppIcon sx={{ color: 'white' }} />, path: "/" },
  ];

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    toggleDrawer();
  };

  const list = (
    <SidebarContainer role="presentation">
      <List>
        {menuItems.map((item) => (
          <StyledListItem button key={item.text} onClick={() => handleNavigation(item.path)}>
            <ListItemIcon aria-label={item.text}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </StyledListItem>
        ))}
      </List>
    </SidebarContainer>
  );

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer}
        sx={{ ml: 2 }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            backgroundColor: 'transparent', // Tornar o fundo do Drawer transparente
          },
        }}
        BackdropProps={{
          invisible: true, // Torna o backdrop invisível para evitar o fundo branco
        }}
      >
        {list}
      </Drawer>
    </div>
  );
};

export default Sidebar;
