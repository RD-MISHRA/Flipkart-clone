import React from 'react';
import { Box, Button, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
const LeftContainer = styled(Box)`
  min-width: 40%;
  padding: 40px 0 0 80px;
  
 
  
`;

const Image = styled('img')({
  padding: '15px',
  // border: '1px solid #f0f0f0',
  width:'95%',
});


const StyledButton = styled(Button)`
    width: 48%;
    border-radius: 2px;
    height: 50px;
    color: #FFF;
`;





const ActionItems = ({product}) => {
  return (
    <LeftContainer>
    <Box style={{padding: '15px 20px',border:'1px solid #f0f0f0'}} >
      <Image src={product.detailUrl} alt="product" /> {/* Assuming Product is defined */}
      </Box>
      <StyledButton variant="contained" style={{marginRight:10,background:'#ff9f00'}}><Cart />Add to Cart</StyledButton>
      <StyledButton variant="contained" style={{background:'#fb541b'}}><Flash />Buy Now</StyledButton> {/* Typo: should be "contained" */}
    </LeftContainer>
  );
};

export default ActionItems;
