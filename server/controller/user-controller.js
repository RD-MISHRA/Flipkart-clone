
import User from '../model/userSchema.js';
export const userSignup=async(request,response)=>{
    try{

        const exist=await User.findOne({username:request.body.username});
        if(exist) {
            return response.status(401).json({ message: 'User already exist'});}
        //user has data of signup page  
const user=request.body;
const newUser=new User(user);
await newUser.save();

response.status(200).json({message:user});
    }
    catch(error){
        response.status(500).json({message:error.message});

    }
}
// export const userSignup = async (request, response) => {
//     try {
//         console.log(request.body);
//         // Perform asynchronous operations here if needed
//         // Example: const result = await someAsyncFunction();
//         // Send response back to the client
//         response.status(200).json({ message: 'Signup successful' });
//     } catch (error) {
//         console.error(error);
//         response.status(500).json({ message: 'Internal server error' });
//     }
// };

export const userLogin=async(request,response)=>{
    try {
        let user = await User.findOne({ username: request.body.username, password: request.body.password });
        if(user) {
            return response.status(200).json({data:user});
        } else {
            return response.status(401).json('Invalid Login');
        }

    } catch (error) {
        if (error.response && error.response.status === 401) {
            console.log('Invalid Login'); // You can replace this with your error handling logic
        } else {
            console.error('An unexpected error occurred:', error.message);
        }      
    }
}
