
import pkg from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

const { v2: cloudinary } = pkg;

cloudinary.config({
  cloud_name: "",
  api_key: "",
  api_secret: "",
});

export default cloudinary;