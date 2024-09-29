import React from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddCardIcon from '@mui/icons-material/AddCard';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PieChartIcon from '@mui/icons-material/PieChart';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { text: "Home", icon: <HomeOutlinedIcon />, path: "/Menu" },
    { text: "Formas de Pagamento", icon: <AddCardIcon />, path: "/Pagamento" },
    { text: "Categoria", icon: <AddShoppingCartIcon />, path: "/TipoGastos" },
    { text: "Adicionar Transação", icon: <AddCardIcon />, path: "/Gastos" },
    { text: "PieChart", icon: <PieChartIcon />, path: "/PieChart" },
    { text: "BarChart", icon: <StackedBarChartIcon />, path: "/BarChart" },
    { text: "Exit", icon: <ExitToAppIcon />, path: "/" },
  ];

  // Função para alternar a visibilidade da Sidebar
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // Função para navegação
  const handleNavigation = (path) => {
    navigate(path);
    toggleDrawer(); // Fecha o Drawer após a navegação
  };

  // Itens da Sidebar
  const list = (
    <Box
      sx={{ width: 250, bgcolor: 'background.paper' }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text} onClick={() => handleNavigation(item.path)}>
            <ListItemIcon aria-label={item.text}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
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
