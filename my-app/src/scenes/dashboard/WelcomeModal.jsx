// WelcomeModal.js
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, Button } from '@mui/material';

// Estilos personalizados
const styles = {
  dialogTitle: {
    backgroundColor: '#6200ea', // Cor de fundo
    color: '#ffffff', // Cor do texto
    textAlign: 'center', // Alinhamento central
    padding: '16px 24px', // Padding interno
  },
  dialogContent: {
    padding: '20px 24px', // Padding interno
  },
  dialogActions: {
    justifyContent: 'center', // Centraliza os botões
    padding: '16px', // Padding interno
  },
  button: {
    backgroundColor: '#03dac5', // Cor do botão
    color: '#ffffff', // Cor do texto do botão
    '&:hover': {
      backgroundColor: '#03a89e', // Cor do botão ao passar o mouse
    },
  },
  highlight: {
    backgroundColor: '#ffeb3b', // Cor de fundo amarelo
    borderRadius: '4px', // Bordas arredondadas
    padding: '4px 8px', // Padding interno
    fontWeight: 'bold', // Peso da fonte
    color: '#1c044c', // Cor do texto
    fontSize: '1.2rem', // Tamanho da fonte
  },
};

const WelcomeModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle sx={styles.dialogTitle}>Bem-vindo ao seu Dashboard!</DialogTitle>
      <DialogContent sx={styles.dialogContent}>
        <Typography variant="body1">
          Vamos adicionar sua primeira transação. Clique no símbolo de <span style={styles.highlight}>+</span> no canto superior direito e comece a organizar sua vida financeira.
        </Typography>
      </DialogContent>
      <DialogActions sx={styles.dialogActions}>
        <Button onClick={onClose} sx={styles.button} variant="contained">
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WelcomeModal;
