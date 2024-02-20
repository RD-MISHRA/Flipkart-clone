
import { Grid,Typography,Box,styled, Button } from "@mui/material";
import { UseSelector, useSelector } from "react-redux";
//components
import { loadStripe } from '@stripe/stripe-js';
import {  toast } from 'react-toastify';


import CartItem from "./CartItems";
import TotalView from './TotalView';
import EmptyCart from "./EmptyCart";

const Container=styled(Grid)(({ theme }) => ({
    padding: '30px 135px',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
        padding: '15px 0'
    }
}));

const Header=styled(Box)`
padding:15 px 24px;
background:#fff;
`

const BottomWrapper = styled(Box)`
    padding: 16px 22px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0;
`;
const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    color: #fff;
    border-radius: 2px;
    width: 250px;
    height: 51px;
`;
const LeftComponent = styled(Grid)(({ theme }) => ({
    paddingRight: 15,
    [theme.breakpoints.down('sm')]: {
        marginBottom: 15
    }
}));


 const Cart=()=>{
const {cartItems}=useSelector(state=>state.cart)



// const makePayment = async()=>{
//     const stripe = await loadStripe("pk_test_51OlanvSIJHY8OKsruQZYNUBBGB4YaKCkekOpK9F1XNgTWn9ZYCScOKG1YnazbQI6SLseWjYPApI3BPVfn7wLHSyJ00jURQTfIq");

//     const body = {
//         products:cartItems
        
//     }
//     const headers = {
//         "Content-Type":"application/json"
//     }
//     const response = await fetch("http://localhost:8000/api/create-checkout-session",{
//         method:"POST",
//         headers:headers,
//         body:JSON.stringify(body)
//     });

//     const session = await response.json();

//     const result = stripe.redirectToCheckout({
//         sessionId:session.id
//     });
    
//     if(result.error){
//         console.log(result.error);
//     }
// }

const makePayment = async () => {
    // Load Stripe
    const stripe = await loadStripe("pk_test_51OlanvSIJHY8OKsruQZYNUBBGB4YaKCkekOpK9F1XNgTWn9ZYCScOKG1YnazbQI6SLseWjYPApI3BPVfn7wLHSyJ00jURQTfIq");
    
    // Prepare the request body with cart items
    const body = {
        products: cartItems,
    };

    const headers = {
        "Content-Type": "application/json"
    };

    try {
        // Make a POST request to create a checkout session
        const response = await fetch("http://localhost:8000/api/create-checkout-session", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        });

        // Parse the response to get the session ID
        const session = await response.json();

        // Redirect to checkout using the session ID
        const result = await stripe.redirectToCheckout({
            sessionId: session.sessionId // Ensure correct property name
        });

        // Handle any errors during redirection
        if (result.error) {
            console.error(result.error);
            toast.info("Payment failed");
        }
    } catch (error) {
        console.error("Error creating checkout session:", error);
        toast.error("Error creating checkout session");
    }
};






    return (
        <>
       {
        cartItems.length?
        <Container container>
            <LeftComponent item lg={9} md={9} sm={12} xs={12}>
<Header>
<Typography>My CART ({cartItems.length})</Typography>
</Header>
{
    cartItems.map(item=>(
        <CartItem item={item}/>
    ))
}
<BottomWrapper>
<StyledButton onClick={makePayment}>Place Order</StyledButton>
</BottomWrapper>

            </LeftComponent>
            <Grid item lg={3} md={3} sm={12} xs={12}>
<TotalView cartItems={cartItems}/>
            </Grid>
        </Container>
        :<div><EmptyCart/></div>
       }
        </>
    )
}

export default Cart;