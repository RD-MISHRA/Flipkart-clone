

import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Button, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';

const LeftContainer = styled(Box)(({ theme }) => ({
  width: '450px', 
  padding: '40px 0 0 80px',
  overflow: 'hidden',
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,
  zIndex: 100,
  backgroundColor: '#fff',
  boxShadow: '0 2px 4px rgba(0,0,0,0.01)',
  [theme.breakpoints.down('md')]: {
    padding: '20px 40px',
  }
}));

const Image = styled('img')({

  padding: '15px',
  width: '95%',
  marginTop: '30px',
});

const StyledButton = styled(Button)`
  width: 48%;
  border-radius: 2px;
  height: 50px;
  color: #fff;
`;

const ActionItems = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { id } = product;
  const navigate = useNavigate();

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    toast.info("Item added to cart");
    navigate('/cart');
  }

  const BuyNow = () => {
    toast.info('ADD IN CART AND THEN BUY');
  };

  return (
    <LeftContainer>
      <Box style={{ padding: '15px 20px', border: '1px solid #f0f0f0' }}>
        <Image src={product.detailUrl} alt="product" />
      </Box>
      <StyledButton variant="contained" onClick={addItemToCart} style={{ marginRight: 10, background: '#ff9f00' }}>
        <Cart /> Add to Cart
      </StyledButton>
      <StyledButton variant="contained" style={{ background: '#fb541b' }} onClick={BuyNow}>
        <Flash /> Buy Now
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionItems;
