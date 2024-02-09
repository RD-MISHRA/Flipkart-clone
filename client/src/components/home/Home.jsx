
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

const Home=()=>{
    //getProducts is state here
const {products}=useSelector(state=>state.getProducts)
console.log(products);
    const dispatch=useDispatch();
useEffect(()=>{
    dispatch(getProducts())

},[dispatch])

    return (
        <Fragment><NavBar/>
       
        <Component>        <Banner/>
        
        <Slide products={products}  title="Deal of the day" timer={true}/>
        <MidSlide products={products}  title="Discounts for you" timer={false}/>
        <MidSection/>
        <Slide products={products}  title="Suggesting Items" timer={false}/>
       
        <Slide products={products}  title="Top Selection" timer={false}/>
        <Slide products={products}  title="Recommended Items" timer={false}/>
        <Slide products={products}  title="Season's top picks " timer={false}/>
        <Slide products={products}  title="Tops deal on accessories" timer={false}/>
        </Component>
        
        </Fragment>
    
    )
}


export  default  Home ;