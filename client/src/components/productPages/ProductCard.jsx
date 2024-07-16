
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';
import { Typography } from '@mui/material';

const ProductCard = ({ products, text }) => {
  // Filter products based on category matching the given text or 'Appliances' or 'Electronics'
  const filteredProducts = products.filter(product => 
    product.category === text || product.category === 'Appliances');

  return (
    <div className="product-card-container">
      {filteredProducts.map(product => (
        <Link to={`/product/${product.id}`} className="product-card-link" key={product.id}>
          <div className="product-card">
            <img
              className="product-card-image"
              src={product.url}
              alt={product.name}
            />
            <div className="sponsored-title">
              <p className="product-card-title">
                sponsored
              </p>
              <img
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                style={{ height: '21px', width: '75px' }}
                alt="sponsored"
              />
            </div>
            <div className="product-card-content">
              <p className="product-card-description">
                {product.description.split(' ').slice(0, 10).join(' ')}
              </p>
              <p className="product-card-title">
                {product.title.shortTitle}
              </p>
              <Typography>
                <span style={{ fontSize: 16, color: 'black' }}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                <span style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                <span style={{ color: '#388E3C' }}>{product.price.discount} off</span>
              </Typography>
              {product.quantity < 5 && (
                <p style={{ color: 'red', fontSize: '12px' }}>
                  Hurry, only {product.quantity} in stock!
                </p>
              )}
            </div>
           
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductCard;
