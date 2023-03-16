// Package init....
import express from "express";
import color from "colors";
import env from "dotenv";
import cors from "cors";
import productRouter from "./routes/products/productRoutes.js";
import { connectMongoDB } from "./config/db.js";
import { errorHendler } from "./middleware/errorHendler.js";

// Port init....
env.config();
const port = process.env.PORT || 4040;

// Exporess init....
const app = express();

// Manage form data...
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cors());

// Select static foulder...
app.use(express.static('api/public'));

// Manage routing system...
app.use('/api/v1/product', productRouter);

// Manage error hendler...
app.use(errorHendler);

// Creatre server here...
app.listen(port, ()=>{
    connectMongoDB();
    console.log(`Server is running on port ${port}`.bgBlue.white);
})
