import React from "react";
import { useNavigate } from 'react-router-dom';
import { Grid, Box, Button, TextField, Typography, Paper } from '@mui/material';

/**
 * Função que retorna o JSX da página de Cadastro
 *
 * @returns {JSX.Element} O JSX da página de Cadastro
 */
function Cadastro() {
    const navigate = useNavigate();

    // Função para o botão "Cadastrar"
    const cadastrar = () => {
        navigate('/');
    };

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            {/* Seção de imagem */}
            <Grid
                item
                xs={false}
                sm={4}
                md={6}
                sx={{
                    backgroundImage: 'url(LOGO_TELA_DE_LOGIN.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            {/* Seção de Cadastro */}
            <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h4" gutterBottom>
                        Cadastre-se
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="nome"
                            label="Nome"
                            name="nome"
                            autoComplete="name"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            id="email"
                            label="E-mail"
                            name="email"
                            autoComplete="email"
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            name="senha"
                            label="Senha"
                            type="password"
                            id="senha"
                            autoComplete="new-password"
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            name="confirmar-senha"
                            label="Confirmar Senha"
                            type="password"
                            id="confirmar-senha"
                            autoComplete="new-password"
                        />

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={cadastrar}
                                sx={{ mr: 2 }}
                            >
                                Cadastrar
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Cadastro;
