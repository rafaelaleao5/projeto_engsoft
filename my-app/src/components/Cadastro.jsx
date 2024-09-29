import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { Grid, Box, Button, TextField, Typography, Paper } from '@mui/material';
import Logo from '../img/LOGO.png';
import { register } from "../controllers/registerController";

/**
 * Função que retorna o JSX da página de Cadastro
 *
 * @returns {JSX.Element} O JSX da página de Cadastro
 */
function Cadastro() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Função para o botão "Cadastrar"
    const cadastrar = () => {
        navigate('/');
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Evita o reload da página
    
        try {
          // Chama a função login e envia os dados
          const token = await register(name, email, password);
          navigate('/');
    
          // Lógica adicional após o login bem-sucedido
          console.log('Login bem-sucedido, token:', token);
        } catch (error) {
          console.error("Email ou senha incorretos!");
        }}

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
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
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            autoComplete="name"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            id="email"
                            label="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="confirmar-senha"
                            autoComplete="new-password"
                        />

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={handleSubmit}
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
