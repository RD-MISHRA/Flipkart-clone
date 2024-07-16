
import ProductCard from './ProductCard';
import React, { useEffect } from 'react';
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from 'react-redux';

const RightSide = ({ text }) => {
  const { products } = useSelector(state => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div style={{ backgroundColor: '#ffffff', width: '200vh', height: 'auto', padding: '5px', marginTop: '15px', marginLeft: '10px' }}>
    <p style={{fontSize:'12px',color :'rgb(135, 135, 135)',marginTop:'0px'}}>Having a comfortable bed can enhance your sleeping experience. Swipe and select from a wide range of warm and cosy quilts online and give an aesthetic vibe to your room. The adaptable bed linens offer warmth and serve a range of purposes, such as serving as bed covers. Make sure to choose blankets that are fluffy and made of breathable fabrics. You can pick quilts depending on the size of your mattress. Blankets for different sizes are available online, including double, single, queen, king, and crib. Check out various types of razai online, such as top sheets, comforters, electric blankets, duvets, swaddling baby blankets, AC blanket, and so on. Your body temperature changes as you fall asleep; by opting for cotton quilts, you can sleep peacefully. Cotton material has the ability to prevent your body from sweating as it absorbs heat effectively. You can explore other materials like fur, silk, bamboo, polyester, and more. Trendy patterns like motifs, embroidered, polka, cartoon, abstract, and more are available online. Take a look at all the alternatives and pick the blankets based on your requirements. Browse and choose trendy quilt designs from brands like DRadhey, Cloth Fusion, Tharunsha Elite, Supreme Home Collective, Beta Divine, and many more. </p>
      <ProductCard products={products} text={text} />
    </div>
  );
};

export default RightSide;
