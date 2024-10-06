import React from "react";
import { useNavigate, Link } from 'react-router-dom';
import { Grid, Box, Button, TextField, Typography, Paper } from '@mui/material';
import Logo from '../img/LOGO.png';

/**
 * Função que retorna o JSX da página de Login
 *
 * @returns {JSX.Element} O JSX da página de Login
 */
function Login() {
    const navigate = useNavigate(); // Hook para navegação

    // Função para o botão "Entrar"
    const entrar = () => {
        navigate('/Menu');
    };

    // Função para o botão "Cadastrar"
    const inscrever = () => {
        navigate('/cadastro');
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

            {/* Seção de Login */}
            <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 0, // Remover margem vertical padrão
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center', // Centralizar verticalmente
                        height: '100vh', // Garantir que ocupe toda a altura
                        '@keyframes slideIn': { from: { transform: 'translateY(-20px)', opacity: 0 }, to: { transform: 'translateY(0)', opacity: 1 } },
                        animation: 'slideIn 1s ease-in-out',
                    }}
                >
                    <Typography component="h1" variant="h4" gutterBottom>
                        Entrar
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="usuario"
                            label="Usuário"
                            name="usuario"
                            autoComplete="username"
                            autoFocus
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#ddd',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#1976d2',
                                    },
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
                            autoComplete="current-password"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#ddd',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#1976d2',
                                    },
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
                                onClick={entrar}
                                sx={{
                                    mr: 2,
                                    backgroundColor: '#19044b', // Cor do botão "Entrar"
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: '#130337', // Cor de hover
                                        transform: 'scale(1.02)',
                                    },
                                }}
                            >
                                Entrar
                            </Button>
                            <Button
                                type="button"
                                fullWidth
                                variant="outlined"
                                color="secondary"
                                onClick={inscrever}
                                sx={{
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: '#fbc02d',
                                        borderColor: '#fbc02d',
                                        color: '#fff',
                                        transform: 'scale(1.02)',
                                    },
                                }}
                            >
                                Cadastrar
                            </Button>
                        </Box>

                        <Box sx={{ mt: 2, textAlign: 'center' }}>
                            <Link to="/RecuperacaoSenha" style={{ textDecoration: 'none', color: '#1976d2' }}>
                                Esqueceu a senha?
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Login;
