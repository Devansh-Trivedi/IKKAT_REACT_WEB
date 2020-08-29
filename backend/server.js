import express from 'express';
import data from './data.js';
import dotenv from 'dotenv';
import config from './config.js';
import mongoose from 'mongoose';

dotenv.config();

const mongodbUrl=config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser:true
}).catch(error=>console.log(error.reason));
 
const app = express();

app.get("/api/products", (req,res)=>{
    res.send(data.products);
});

app.listen(5000, () => {console.log("Server started at port 5000")});

