
// import { Fragment } from "react";
// import NavBar from "./NavBar";
// import Banner from './Banner';
// import {styled,Box} from '@mui/material';
// import { useEffect } from "react";
// import { getProducts } from "../../redux/actions/productActions";
// import {useDispatch,useSelector} from 'react-redux';
// import Slide from './Slide.jsx';
// import MidSlide from './MidSlide.jsx'
// import MidSection from "./MidSection.jsx";


// const Component=styled(Box)`

// padding:10px;
// background:#F2F2F2;
// `

// const Home=()=>{
//     //getProducts is state here
// const {products}=useSelector(state=>state.getProducts)
// console.log(products);
//     const dispatch=useDispatch();
// useEffect(()=>{
//     dispatch(getProducts())

// },[dispatch])

//     return (
//         <Fragment>
            
//         <NavBar/>
       
//         <Component>        <Banner/>
        
//         <Slide products={products}  title="Deal of the day" timer={true}/>
//         <MidSlide products={products}  title="Discounts for you" timer={false}/>
//         <MidSection/>
//         <Slide products={products}  title="Suggesting Items" timer={false}/>
       
//         <Slide products={products}  title="Top Selection" timer={false}/>
//         <Slide products={products}  title="Recommended Items" timer={false}/>
//         <Slide products={products}  title="Season's top picks " timer={false}/>
//         <Slide products={products}  title="Tops deal on accessories" timer={false}/>
//         </Component>
       
        
//         </Fragment>
    
//     )
// }


// export  default  Home ;

 import { Fragment } from "react";
import NavBar from "./NavBar";
import Banner from './Banner';
import {styled,Box} from '@mui/material';
import { useEffect } from "react";
import { getProducts } from "../../redux/actions/productActions";
import {useDispatch,useSelector} from 'react-redux';
import Slide from './Slide.jsx';
import MidSlide from './MidSlide.jsx'
import MidSection from "./MidSection.jsx";


const Component=styled(Box)`

padding:10px;
background:#F2F2F2;
`




const SlideShow = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.getProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // Function to filter products by category
  const filterProductsByCategory = (category) => {
    return products.filter(product => product.category === category);
  }

  return (
    <Fragment>
     <NavBar/>
     <Component>        <Banner/>
     <Slide products={products}  title="Deal of the day" timer={true}/>
      <MidSlide products={filterProductsByCategory('Grocery')} title="Grocery for you" timer={false} />
     
      <Slide products={filterProductsByCategory('Mobile')} title="Top Mobiles" timer={false} />
      <Slide products={filterProductsByCategory('Fashion')} title="Fashion For You" timer={false} />
      <Slide products={filterProductsByCategory('Electronics')} title="Best Of Electronics" timer={false} />
      <Slide products={filterProductsByCategory('Home')} title="Home" timer={false} />
      <Slide products={products}  title="Best Of Flipkart" timer={true}/>
      <MidSection />
      </Component>
      </Fragment>
  );
}

export default SlideShow;
