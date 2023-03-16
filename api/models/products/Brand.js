// Package init...
import mongoose from "mongoose";

// Create brand schema here...
const productBrandSchema = mongoose.Schema({
    name : {
        type : String,
        trim : true,
        unique : true,
        required : true
    },
    slug : {
        type : String,
        trim : true,
    },
    photo : {
        type : String,
        trim : true,
        default : null,
    },
    status : {
        type : Boolean,
        default : true,
    },
    trash : {
        type : Boolean,
        default : false
    }
},{
    timestamps : true
});

// Export product category schema here..
export default mongoose.model("Brand", productBrandSchema)
