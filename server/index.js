import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

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

app.use('/',Router)
const PORT=8000;
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

Connection(USERNAME , PASSWORD);
app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));
DefaultData();