
import { products } from "./constants/data.js"
import Product from "./model/products-schema.js"
const DefaultData=async()=>{
 
try{//delete all objects then import data
     await Product.insertMany(products);
     console.log('data imported successfully');

}catch(error){
    console.log('there was error in inserting ',error.message)
}


}

export default DefaultData;