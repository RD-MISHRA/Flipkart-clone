import  { useState, useContext } from 'react';

import Profile from './Profile';


import {Box,Button,Typography,styled} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// COMPONENTS
import LoginDialog from '../login/LoginDialog';
import { DataContext } from '../../context/DataProvider';

const Wrapper=styled(Box)`
display:flex;
margin:0 3% 0 auto;
font-size:16px;

&>button,&>p,&>div{
    margin-right:40px;
    font-size:16px;
    align-items:center;
    cursor: pointer;
}
`

const Container=styled(Box)`
margin-top:-4px;
display:flex;

`
const LoginButton=styled(Button)`
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



const CustomButton=()=>{

    const [open,setOpen]=useState(false);
    const { account, setAccount } = useContext(DataContext);

   
    const openDialog=()=>{
        setOpen(true);
    }
    return(
<Wrapper>
{
                account ? <Profile account={account} setAccount={setAccount}/>:
                    <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>
                
            }
<Typography style={{marginTop:3,width:135}}>Become a Seller </Typography>
<Typography style={{marginTop:3}}>More</Typography>
<Container>
<ShoppingCartIcon/>
    <Typography>Cart</Typography>
    {/* <ShoppingCartIcon/> */}

</Container>
<LoginDialog open={open} setOpen={setOpen}/>

</Wrapper>


    )
}
export default CustomButton;