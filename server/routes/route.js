// import express from 'express';
// import multer from 'multer';
// import { CloudinaryStorage } from 'multer-storage-cloudinary';
// import cloudinary from '../config/cloudinaryConfig.js';
// import { createProduct } from '../controller/productUploadController.js';
// import { userSignup,userLogin } from '../controller/user-controller.js';
// import { getProducts ,getProductById} from '../controller/product-controller.js';
// import { addReview} from '../controller/review.js';
// import { getReview } from '../controller/getReview.js';

// const router=express.Router();

// router.post('/signup',userSignup);
// router.post('/login',userLogin);
// router.get('/products',getProducts);
// router.get('/product/:id',getProductById);
// router.get('/getReview/:productId',getReview);
// router.post('/addReview',addReview);



// const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: {
//       folder: 'uploads',
//       format: async (req, file) => 'png',
//       public_id: (req, file) => file.originalname.split('.')[0],
//     },
//   });
  
//   const upload = multer({ storage: storage });
  
//   router.post('/upload', upload.single('image'), createProduct);
  






// export default router;



import express from 'express';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../config/cloudinaryConfig.js';
import { createProduct } from '../controller/productUploadController.js';
import { userSignup, userLogin } from '../controller/user-controller.js';
import { getProducts, getProductById } from '../controller/product-controller.js';
import { addReview } from '../controller/review.js';
import { getReview } from '../controller/getReview.js';
import { register, login } from '../controller/sellerauthController.js';

const router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogin);
router.get('/products', getProducts);
router.get('/product/:id', getProductById);
router.get('/getReview/:productId', getReview);
router.post('/addReview', addReview);
router.post('/sellerSignup', register);
router.post('/sellerLogin', login);

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads',
    format: async (req, file) => 'png',
    public_id: (req, file) => file.originalname.split('.')[0],
  },
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('image'), (req, res, next) => {
  console.log("/upload route called");
  next();
}, createProduct);

export default router;
