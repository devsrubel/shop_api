// Package init...
import mongoose from "mongoose";
import { customError } from "../utils/customError.js";

// Connect mongodb here....
export const connectMongoDB = async () =>{
   try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB Connect Successfull`.bgCyan.white);
   } catch (error) {
    // next(customError("MongoDB URL Invalid!", "500"))
    console.log(`${error.message}`);
   }
}