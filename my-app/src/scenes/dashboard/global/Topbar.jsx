import { Box, IconButton, useTheme, Dialog, DialogTitle, DialogContent } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../../../theme";
import InputBase from "@mui/material/InputBase";
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
    <Box 
      className="topbar" 
      display="flex" 
      justifyContent="space-between" 
      p={2} 
      bgcolor="#f3eaff" 
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)" 
    >
      {/* SEARCH BAR */}
      <Box
        display="flex"
        alignItems="center"
        backgroundColor="#ece8ff" 
        borderRadius="15px" 
        boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)" 
        padding="4px 8px" 
      >
        <InputBase 
          sx={{ ml: 2, flex: 1, color: "#333333" }} 
          placeholder="Search" 
        />
        <IconButton type="button" sx={{ p: 1, color: "#7048b7" }}> 
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex" gap={2}>
        <IconButton sx={{ color: "#7048b7", '&:hover': { color: "#5d3990" } }}> 
        </IconButton>

        <IconButton sx={{ color: "#7048b7", '&:hover': { color: "#5d3990" } }}>
          <PersonOutlinedIcon onClick={GotoUser} />
        </IconButton>

        {/* Ícone de adicionar gasto, que abre o modal */}
        <IconButton onClick={handleOpenGastos} sx={{ color: "#32c48d", '&:hover': { color: "#28a574" } }}>
          <AddIcon />
        </IconButton>
      </Box>

      {/* Modal de Gastos */}
      <Dialog 
        open={openGastos} 
        onClose={handleCloseGastos} 
        fullWidth 
        maxWidth="md"
        PaperProps={{
          sx: {
            backgroundColor: "#f7f7f9", 
            borderRadius: "10px",
            padding: "16px", 
          }
        }}
      >
        <DialogTitle sx={{ color: "#1c044c", fontWeight: "bold" }}>Adicionar Nova Transação</DialogTitle>
        <DialogContent>
          <Gastos /> {/* Exibindo o componente Gastos no modal */}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Topbar;
