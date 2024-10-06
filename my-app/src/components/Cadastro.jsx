import React from "react";
import { useNavigate } from 'react-router-dom';
import { Grid, Box, Button, TextField, Typography, Paper } from '@mui/material';
import Logo from '../img/LOGO.png';

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
        <Grid container component="main" sx={{ height: '100vh', '@keyframes fadeIn': { from: { opacity: 0 }, to: { opacity: 1 } }, animation: 'fadeIn 1s ease-in-out' }}>
            {/* Seção de imagem */}
            <Grid
                item
                xs={false}
                sm={4}
                md={6}
                sx={{
                    backgroundImage: `url(${Logo})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            {/* Seção de Cadastro */}
            <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 0,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100vh',
                        '@keyframes slideIn': { from: { transform: 'translateY(-20px)', opacity: 0 }, to: { transform: 'translateY(0)', opacity: 1 } },
                        animation: 'slideIn 1s ease-in-out',
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
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: '#ddd' },
                                    '&:hover fieldset': { borderColor: '#1976d2' },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#1976d2',
                                        boxShadow: '0px 4px 8px rgba(25, 118, 210, 0.3)',
                                    },
                                },
                            }}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            id="email"
                            label="E-mail"
                            name="email"
                            autoComplete="email"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: '#ddd' },
                                    '&:hover fieldset': { borderColor: '#1976d2' },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#1976d2',
                                        boxShadow: '0px 4px 8px rgba(25, 118, 210, 0.3)',
                                    },
                                },
                            }}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            name="senha"
                            label="Senha"
                            type="password"
                            id="senha"
                            autoComplete="new-password"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: '#ddd' },
                                    '&:hover fieldset': { borderColor: '#1976d2' },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#1976d2',
                                        boxShadow: '0px 4px 8px rgba(25, 118, 210, 0.3)',
                                    },
                                },
                            }}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            name="confirmar-senha"
                            label="Confirmar Senha"
                            type="password"
                            id="confirmar-senha"
                            autoComplete="new-password"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: '#ddd' },
                                    '&:hover fieldset': { borderColor: '#1976d2' },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#1976d2',
                                        boxShadow: '0px 4px 8px rgba(25, 118, 210, 0.3)',
                                    },
                                },
                            }}
                        />

                        {/* Campo para Data de Nascimento */}
                        <TextField
                            margin="normal"
                            fullWidth
                            name="data-nascimento"
                            label="Data de Nascimento"
                            type="date"
                            id="data-nascimento"
                            InputLabelProps={{
                                shrink: true, // Para que o label não sobreponha a data
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: '#ddd' },
                                    '&:hover fieldset': { borderColor: '#1976d2' },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#1976d2',
                                        boxShadow: '0px 4px 8px rgba(25, 118, 210, 0.3)',
                                    },
                                },
                            }}
                        />

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={cadastrar}
                                sx={{
                                    mr: 2,
                                    backgroundColor: '#19044b',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: '#130337',
                                        transform: 'scale(1.02)',
                                    },
                                }}
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
