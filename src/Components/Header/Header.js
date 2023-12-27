import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { FaCartPlus } from "react-icons/fa";
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
export default function ButtonAppBar({ setOpen }) {
    const cartData = useSelector((state)=> state.cartData)
    console.log(cartData.length)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Fake Store
                    </Typography>
                    <Button onClick={() => setOpen(true)} sx={{ fontSize: 25 }} color="inherit"> 
                     <Badge style={{fontSize : 30  }}  badgeContent={cartData.length} color="red">
                    <FaCartPlus style={{color : '#ffffff'}} />
                    </Badge> 
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}