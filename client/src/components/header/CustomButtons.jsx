import { useState, useContext } from 'react';

import Profile from './Profile';
import {Link} from 'react-router-dom';
import { UseSelector, useSelector } from 'react-redux';
import { Box, Button, Typography, Badge,styled } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// COMPONENTS
import {  toast } from 'react-toastify';
import LoginDialog from '../login/LoginDialog';
import { DataContext } from '../../context/DataProvider';

const Wrapper = styled(Box)(({ theme }) => ({
    margin: '0 3% 0 auto',
    display: 'flex',
    '& > *': {
        marginRight: '40px !important',
        textDecoration: 'none',
        color: '#FFFFFF',
        fontSize: 12,
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            color: '#2874f0',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            marginTop: 10
        }
    },
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));
// const Container=styled(Box)`
// margin-top:-4px;
// display:flex;

// `
const Container = styled(Link)(({ theme }) => ({
    display: 'flex',
    textDecoration:'none',
    color:'inherit',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));


const LoginButton = styled(Button)`
   color: #2874f0;
    background: #FFFFFF;
    text-transform: none;
    font-weight: 600;
    border-radius: 2px;
    padding: 5px 40px;
    height: 32;
  
`;


// const LoginButton = styled(Button)`
//     color: #2874f0;
//     background: #FFFFFF;
//     text-transform: none;
//     font-weight: 600;
//     border-radius: 2;
//     padding: 5px 40px;
//     height: 32px;
// `;



const CustomButton = () => {

    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(DataContext);
const {cartItems}=useSelector(state=>state.cart)

    const openDialog = () => {
        setOpen(true);
    }
    const handleBecomeSellerClick = () => {
        toast.info('Currently not available');
    };


    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount} /> :
                    <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>

            }
            <Typography style={{ marginTop: 3, width: 135,cursor: 'pointer' }}onClick={handleBecomeSellerClick}>Become a Seller </Typography>
            <Typography style={{ marginTop: 3 }}>More</Typography>
            <Container to="/cart">
             <Badge badgeContent={cartItems?.length} color="secondary"> 
                <ShoppingCartIcon /></Badge>
                <Typography  style={{marginLeft:10}}>Cart</Typography>
                {/* <ShoppingCartIcon/> */}

            </Container>
            <LoginDialog open={open} setOpen={setOpen} />

        </Wrapper>


    )
}
export default CustomButton;