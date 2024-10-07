// WelcomeModal.js
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, Button } from '@mui/material';

const WelcomeModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Bem-vindo ao seu Dashboard!</DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          Vamos adicionar sua primeira transação. Clique no símbolo de <strong>+</strong> no canto superior direito e comece a organizar sua vida financeira.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WelcomeModal;
