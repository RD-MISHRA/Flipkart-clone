import axios from 'axios';
const URL='http://localhost:8000';
export const authenticateSignup=async(data)=>{
    try{
        console.log('Before Axios request');
       return await axios.post(`${URL}/signup`,data);

    }
    catch(error)
    {
        console.log('Enter while',error);
    }
}

export const authenticateLogin=async(data)=>{
    try{
        //remember data is the payload here
        return await axios.post(`${URL}/login`,data);

    }
    catch(error)
    {
        console.log('Enter while  login',error);
        return error.response;
    }};


    export const addReview = async (reviewData) => {
        try {
          const response = await axios.post(`${URL}/addReview`, reviewData);
          return response.data;
        } catch (error) {
          console.error('Error posting review:', error);
          throw error;
        }
      };
    
      export const getReview = async (productId) => {
        const response = await axios.get(`${URL}/getReview/${productId}`);
        return response.data;
    };

