import {Box,Button,Typography,styled} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Wrapper=styled(Box)`
display:flex;
margin:0 3% 0 auto;
font-size:16px;

&>button,&>p,&>div{
    margin-right:40px;
    font-size:16px;
    align-items:center;
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
    return(
<Wrapper>
<LoginButton variant="contained">Login</LoginButton>
<Typography style={{marginTop:3,width:135}}>Become a Seller </Typography>
<Typography style={{marginTop:3}}>More</Typography>
<Container>
<ShoppingCartIcon/>
    <Typography>Cart</Typography>
    {/* <ShoppingCartIcon/> */}

</Container>

</Wrapper>


    )
}
export default CustomButton;