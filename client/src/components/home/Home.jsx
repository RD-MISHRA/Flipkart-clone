
import { Fragment } from "react";
import NavBar from "./NavBar";
import Banner from './Banner';
import {styled,Box} from '@mui/material';
import { useEffect } from "react";
import { getProducts } from "../../redux/actions/productActions";
import {useDispatch,useSelector} from 'react-redux';
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
       
        <Component>        <Banner/></Component>
        
        </Fragment>
    
    )
}


export  default  Home ;