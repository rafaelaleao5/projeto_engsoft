import React, { useContext } from 'react';
import { Box, Typography, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ReceiptIcon from '@mui/icons-material/Receipt';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import GastosContext from './GastosContext';

const iconMap = {
    Wallet: <AccountBalanceWalletIcon />,
    'Bank transfer': <CreditCardIcon />,
    Paypal: <AttachMoneyIcon />,
    'Master card': <ReceiptIcon />,
    Transfer: <TransferWithinAStationIcon />,
};

function Transactions() {
    const { gastos } = useContext(GastosContext); // Acessa o estado global

    // Seleciona as últimas 5 transações (aqui gastos é um array, certifique-se de que os mais recentes estão no final)
    const ultimosGastos = gastos.slice(-5).reverse(); // Pega os últimos 5 e inverte para mostrar os mais recentes no topo

    return (
        <Box sx={{ width: '40%', bgcolor: 'background.paper', borderRadius: '10px', boxShadow: 2, p: 2 }}>
            <Typography variant="h6" gutterBottom>
                Transações
            </Typography>
            <List>
                {ultimosGastos.map((gasto, index) => (
                    <ListItem key={index}>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: gasto.entryValue < 0 ? '#ffcccc' : '#ccffcc' }}>
                                {iconMap[gasto.entryType] || <AccountBalanceWalletIcon />} {/* Ícone baseado no tipo */}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Typography variant="body1" component="span">
                                    {gasto.entryName}
                                </Typography>
                            }
                        />
                        <Typography
                            variant="body1"
                            component="span"
                            sx={{ color: gasto.entryValue < 0 ? 'red' : 'green', fontWeight: 'bold' }}
                        >
                            {gasto.entryValue > 0 ? `+ $${gasto.entryValue}` : `- $${Math.abs(gasto.entryValue)}`}
                        </Typography>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default Transactions;
