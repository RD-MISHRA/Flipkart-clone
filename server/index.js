import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

// const stripe = require("stripe")(sk_test_51OlanvSIJHY8OKsr2uz8PXMIoudOoKGW0poQiyneoweDXSZhsZh1eFDbQfX5mSv1AdXXsCTS3XQXOVsFHGWDMxKy00lvrQhzGK);
import stripePackage from 'stripe';

dotenv.config();

const stripeSecretKey = "sk_test_51OlanvSIJHY8OKsr2uz8PXMIoudOoKGW0poQiyneoweDXSZhsZh1eFDbQfX5mSv1AdXXsCTS3XQXOVsFHGWDMxKy00lvrQhzGK";
const stripe = stripePackage(stripeSecretKey);

import Connection from './database/db.js';
import DefaultData from './default.js';
import  Router from './routes/route.js';



const app=express();
app.use(express.json());
// const router = express.Router();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config();
app.use(cors());









app.post("/api/create-checkout-session", async (req, res) => {
    const { products } = req.body;

    // Default values for customerName and customerAddress
    const customerEmail = "xyz@example.com";

    // Map the products array to construct line items for the Stripe session
    const lineItems = products.map((product) => ({
        price_data: {
            currency: "inr",
            product_data: {
                name: product.title.longTitle,
                images: [product.url] 
            },
            unit_amount: product.price.cost * 100, 
        },
        quantity: product.quantity
    }));

    try {
        // Create a new Stripe checkout session with the constructed line items
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: "http://localhost:3000/cart",
            cancel_url: "http://localhost:3000/cart",
            billing_address_collection: 'required', // Specify that billing address is required
            customer_email: customerEmail, // Include customer email
        });

        // Send the session ID back to the client
        res.status(200).json({ sessionId: session.id });
    } catch (error) {
        // Handle any errors that occur during session creation
        console.error("Error creating checkout session:", error);
        res.status(500).send("Error creating checkout session");
    }
});



app.use('/',Router);
const PORT=8000;
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

Connection(USERNAME , PASSWORD);
app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));
 DefaultData();