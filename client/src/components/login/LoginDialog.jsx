import { Dialog, Box, TextField, Typography, Button, styled } from '@mui/material'
import { useState, useContext } from 'react';
import {  toast } from 'react-toastify';

import { DataContext } from '../../context/DataProvider.jsx';
import { authenticateSignup, authenticateLogin } from '../../service/api.js';
const Component = styled(Box)`
height:75vh;
width:90vh;
padding: 0;
    padding-top: 0;
    overflow: hidden; 
`;

const Image = styled(Box)`
background:#2875f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png
) center 85% no-repeat;
height:83%;
width:28%;
padding:45px 35px;
&>p,&>h5{
    color:white;
    font-weight:600;

}
`
const Wrapper = styled(Box)`
display:flex;
flex-direction:column;
padding:25px 35px;
flex:1;
overflow: hidden;
&>div ,&>button,&>p{
    margin-top:20px;
}
`
const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`
const LoginButton = styled(Button)`
  && {
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
  }
`;
// const signupUser=async()=>{
//     let res=await authenticateSignup(signup);
// }

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;
const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const CreateAccount = styled(Typography)`
font-size:14px;
text-align:center;
color:#2874f0;
font-weight:600;
cursor:pointer;
`

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};
const loginInitialValues = {
    username: '',
    password: ''
}


const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
}
const LoginDialog = ({ open, setOpen }) => {
    const [signup, setSignup] = useState(signupInitialValues);
    const [account, toggleAccount] = useState(accountInitialValues.login);
    const { setAccount } = useContext(DataContext);
    const [login, setLogin] = useState(loginInitialValues);
    const [error, setError] = useState(false);


    //this is written to close the logindialoug box when clicked on screen
    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
        setError(false);
    }

    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);


    }

    //   //this is written to close the logindialoug box when clicked on screen
    //   const handleClose=()=>{
    //     setOpen(false);
    //     toggleAccount(accountInitialValues.login);
    // }

    // const signupUser=async()=>{
    //     let res=await authenticateSignup(signup);
    //     console.log(res);
    // }

    // //this is written to close the logindialoug box when clicked on screen
    // const handleClose=()=>{
    //     setOpen(false);
    //     toggleAccount(accountInitialValues.login);
    // }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
        console.log(signup);
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }
    // const signupUser=async()=>{
    //     let res=await authenticateSignup(signup);
    //     console.log(res);
    // }
    // const signupUser = async () => {
    //     try {
    //         let res = await authenticateSignup(signup);
    //         if (!res)
    //             return;

    //         handleClose();
    //         setAccount(signup.firstname)
    //         console.log(res);
    //     } catch (error) {
    //         console.error("Error in signupUser:", error);
    //     }
    // }

    const signupUser = async () => {
        try {
            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(signup.email)) {
                toast.error('Please enter a valid email address.');
                return;
            }
    
            // Validate phone number format
            const phoneRegex = /^\d{10}$/; // Assuming phone number should be 10 digits
            if (!phoneRegex.test(signup.phone)) {
                toast.error('Please enter a valid phone number (10 digits without spaces or special characters).');
                return;
            }
    
            let res = await authenticateSignup(signup);
    
            if (!res)
                return;
               
            handleClose();
            setAccount(signup.firstname);
            toast.info("SignUp Successful");
        } catch (error) {
            console.error("Error in signupUser:", error);
        }
    }
    


const loginUser = async () => {

    let response = await authenticateLogin(login);
    console.log(response);
    if (response.status === 200) {
        handleClose();
        setAccount(response.data.data.firstname);
        toast.info("Login Successful");
    }
    else {
        setError(true);
        toast.error("Cannot login Check for Id and Password");
    }
}



return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'UNSET' } }}>
        <Component>
            <Box style={{ display: 'flex', height: '100%' }}>
                <Image>
                    <Typography variant="h5">
                        {account.heading}
                    </Typography>
                    <Typography >
                        {account.subHeading}
                    </Typography>
                </Image>
                {account.view === 'login' ?
                    <Wrapper>
                        <TextField variant="standard" onChange={(e) => onValueChange(e)} name='username' label="Enter Email/Mobile number" />
                        {error && <Error>Please enter valid username or password</Error>}
                        <TextField variant="standard" onChange={(e) => onValueChange(e)} name='password' label="Password" />
                        <Text>i agree to the terms and conditions </Text>
                        <LoginButton onClick={() => loginUser()}>Login</LoginButton>
                        <Typography style={{ textAlign: 'center' }}>OR</Typography>
                        <RequestOTP>Request OTP</RequestOTP>
                        <CreateAccount onClick={toggleSignup}>New to Flipkart?Create an account </CreateAccount>


                    </Wrapper>
                    :
                    <Wrapper>
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' />
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname' />
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label='Enter Email' />
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone' />
                        <LoginButton onClick={signupUser} >Continue</LoginButton>

                    </Wrapper>
                }
            </Box>
        </Component>
    </Dialog>
)
            }

export default LoginDialog;