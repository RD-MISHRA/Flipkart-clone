import mongoose from "mongoose";

export const Connection= async(username,password)=>{
    
    const URL=`mongodb+srv://${username}:${password}@ecommerce-web.nirvowu.mongodb.net/?retryWrites=true&w=majority`;
   // const URL=`mongodb+srv://rdmishrax:<password>@cluster0.2sb3i18.mongodb.net/`;
   //const URL= `mongodb+srv://${username}:${password}@cluster0.2sb3i18.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    try{
        //connect function here is ascyncronous function it will return a promise hence we will use then here
    await mongoose.connect(URL);
    console.log('DATABASE CONNECTED SUCCESSFULLY')
    }catch(error){
        console.log('Error while connecting with the database',error.message);
    }
}

export default Connection;