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

    return (
        <Box sx={{ width: '40%', bgcolor: 'background.paper', borderRadius: '10px', boxShadow: 2, p: 2 }}>
            <Typography variant="h6" gutterBottom>
                Transações
            </Typography>
            <List>
                {gastos.map((gasto, index) => (
                    <ListItem key={index}>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: gasto.valor < 0 ? '#ffcccc' : '#ccffcc' }}>
                                {iconMap[gasto.tipo] || <AccountBalanceWalletIcon />} {/* Ícone baseado no tipo */}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Typography variant="body1" component="span">
                                    {gasto.descricao}
                                </Typography>
                            }
                            
                        />
                        <Typography
                            variant="body1"
                            component="span"
                            sx={{ color: gasto.valor < 0 ? 'red' : 'green', fontWeight: 'bold' }}
                        >
                            {gasto.valor > 0 ? `+ $${gasto.valor}` : `- $${Math.abs(gasto.valor)}`}
                        </Typography>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default Transactions;
