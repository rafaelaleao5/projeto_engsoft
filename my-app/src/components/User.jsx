import React from "react";
import { Box, Typography, Avatar, Grid, Button, Divider } from "@mui/material";
import Sidebar from "../scenes/dashboard/global/Sidebar";
import { useNavigate } from "react-router-dom";

function User() {
    // Simulação de dados do usuário
    const userData = {
        nome: "João Silva",
        email: "joao.silva@example.com",
        telefone: "(11) 98765-4321",
        endereço: "Rua Exemplo, 123, São Paulo - SP",
        avatarUrl: "https://via.placeholder.com/150", // Pode ser substituído por uma URL de uma imagem real
    };
   const navigate = useNavigate()

    const Exit = () => {
      navigate("/")}

    return (
        <div>
            <Sidebar></Sidebar>
        <Box sx={{ p: 4, maxWidth: "600px", margin: "0 auto" }}>
            {/* Cabeçalho com Avatar e Nome */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Avatar
                    alt={userData.nome}
                    src={userData.avatarUrl}
                    sx={{ width: 80, height: 80, mr: 3 }}
                />
                <Typography variant="h4">{userData.nome}</Typography>
            </Box>

            <Divider sx={{ mb: 3 }} />

            {/* Informações da Conta */}
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="subtitle1" color="textSecondary">
                        E-mail:
                    </Typography>
                    <Typography variant="body1">{userData.email}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle1" color="textSecondary">
                        Telefone:
                    </Typography>
                    <Typography variant="body1">{userData.telefone}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle1" color="textSecondary">
                        Endereço:
                    </Typography>
                    <Typography variant="body1">{userData.endereço}</Typography>
                </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            {/* Botões de Ação */}
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="contained" color="primary">
                    Editar Perfil
                </Button>
                <Button variant="outlined" color="error" onClick={Exit}>
                    Sair
                </Button>
            </Box>
        </Box>
        </div>

        
    );
}

export default User;
