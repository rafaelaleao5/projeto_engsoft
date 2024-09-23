import React from "react";
import { useNavigate, Link } from 'react-router-dom';
import { Grid, Box, Button, TextField, Typography, Paper } from '@mui/material';

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
        <Grid container component="main" sx={{ height: '100vh' }}>
            {/* Seção de imagem */}
            <Grid
                item
                xs={false}
                sm={4}
                md={6}
                sx={{
                    backgroundImage: 'url(LOGO TELA DE LOGIN.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            {/* Seção de Login */}
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
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            name="senha"
                            label="Senha"
                            type="password"
                            id="senha"
                            autoComplete="current-password"
                        />
                        
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={entrar}
                                sx={{ mr: 2 }}
                            >
                                Entrar
                            </Button>
                            <Button
                                type="button"
                                fullWidth
                                variant="outlined"
                                color="secondary"
                                onClick={inscrever}
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
