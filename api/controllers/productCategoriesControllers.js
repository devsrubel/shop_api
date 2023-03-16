// Package init...
import { customError } from "../utils/customError.js";
import Category from "../models/products/Category.js";

// Create finall routes here..

// Get all product categories here...
export const getAllProductCategories = async (req,res,next) =>{
    // Use try catch function here..
    try {
        const categories = await Category.find();
        res.status(200).json({
            categories,
            message : "Product category get successfull"
        })
    } catch (error) {
        next(error)
    }
}

// Create product category here...
export const createProductCategory = async (req,res,next) =>{
    // Get from data...
    const {name} = req.body;
    // create 
    try {
        const category = await Category.create({
            name, slug : name.toLowerCase().replace(/ /g, '-'), photo : req.file ? req.file.filename : ""
        })
        res.status(203).json({
            category,
            message : "Data create successfull"
        })
    } catch (error) {
        next(customError("hi hi...duplicate key", 400))
    }
}


// Get single product category here..
export const getSingleProductCategory = async (req,res,next) =>{
    // Get slug..
    const {slug} = req.params;
    // Use try catch here..
    try {
        // Get all category...
        const allCategory = await Category.find();
        // Decler a empley array...
        let getSlug = []
        // Get slug...
        allCategory.map((data)=>{
            return getSlug.push(data.slug)
        })
        // Use condition here..
        if (getSlug.includes(slug)) {
            const singleCategory = await Category.findOne({slug})
            res.status(200).json({
                singleCategory,
                message : "Single category get successfull"
            })
        } else {
            res.status(400).json({
                singleCategory : [],
                message : "Single category not found!"
            })
        }
        
    } catch (error) {
        next(error)
    }
}

// Single category delete...
export const deleteSingleProductCategory = async (req,res,next) =>{
    // Get id...form url..
    const { id } = req.params;
    // Use try catch
    try {
        // Get data
        const allCategory = await Category.findById(id);

        // Use condition
        if (allCategory.id == id) {
            const deleteData = await Category.findByIdAndDelete(id);
            res.status(200).json({
                category : deleteData,
                message : "Data delete successfull"
            })
        }
        
    } catch (error) {
        next(customError("Data not found!", 400))
    }
}

// Upage single data here..
export const updateProductSingleCategory = async (req,res,next) =>{
    // Get id from url
    const {id} = req.params;

    // Get from data...
    const {name} = req.body;

    // Use trycatch here..
    try {
        // Get updater use data...
        const singleCategory = await Category.findById(id);
        // Find specific data...
        const updateProductCategory = await Category.findByIdAndUpdate(id, {
            name, slug : name.toLowerCase().replace(/ /g, '-'), photo : req.file ? req.file.filename : singleCategory.photo
        },{new:true});
        res.status(203).json({
            category : updateProductCategory,
            message : "Data update successfull"
        })
    } catch (error) {
        next(error)
    }
}

