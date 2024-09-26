import { Box, IconButton, useTheme, Dialog, DialogTitle, DialogContent } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../../../theme";
import InputBase from "@mui/material/InputBase";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AddIcon from '@mui/icons-material/Add';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Gastos from "../../dashboard/Gastos"; // Caminho corrigido para o componente Gastos
import { useNavigate } from 'react-router-dom';

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();

  // Estado para controlar a abertura e fechamento do modal
  const [openGastos, setOpenGastos] = useState(false);

  // Funções para abrir e fechar o modal de Gastos
  const handleOpenGastos = () => {
    setOpenGastos(true);
  };

  const handleCloseGastos = () => {
    setOpenGastos(false);
  };

  const GotoUser = () => {
    navigate("/User");
  };

  return (
    <Box className="topbar" display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>

        <IconButton>
          <PersonOutlinedIcon onClick={GotoUser} />
        </IconButton>

        {/* Ícone de adicionar gasto, que abre o modal */}
        <IconButton onClick={handleOpenGastos}>
          <AddIcon />
        </IconButton>
      </Box>

      {/* Modal de Gastos */}
      <Dialog open={openGastos} onClose={handleCloseGastos} fullWidth maxWidth="md">
        <DialogTitle>Adicionar Novo Transação</DialogTitle>
        <DialogContent>
          <Gastos /> {/* Exibindo o componente Gastos no modal */}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Topbar;
