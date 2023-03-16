// Package init...
import { customError } from "../utils/customError.js";
import Brand from "../models/products/Brand.js";

// Create finall routes here..

// Get all product brands here...
export const getAllProductBrands = async (req,res,next) =>{
    // Use try catch function here..
    try {
        const brands = await Brand.find();
        res.status(200).json({
            brands,
            message : "Product brand get successfull"
        })
    } catch (error) {
        next(error)
    }
}

// Create product brand here...
export const createProductBrand = async (req,res,next) =>{
    // Get from data...
    const {name} = req.body;
    // create 
    try {
        const brand = await Brand.create({
            name, slug : name.toLowerCase().replace(/ /g, '-'), photo : req.file ? req.file.filename : ""
        })
        res.status(203).json({
            brand,
            message : "Data create successfull"
        })
    } catch (error) {
        next(customError("hi hi...duplicate key", 400))
    }
}


// Get single product brand here..
export const getSingleProductBrand = async (req,res,next) =>{
    // Get slug..
    const {slug} = req.params;
    // Use try catch here..
    try {
        // Get all brand...
        const allBrand = await Brand.find();
        // Decler a empley array...
        let getSlug = []
        // Get slug...
        allBrand.map((data)=>{
            return getSlug.push(data.slug)
        })
        // Use condition here..
        if (getSlug.includes(slug)) {
            const singleBrand = await Brand.findOne({slug})
            res.status(200).json({
                singleBrand,
                message : "Single brand get successfull"
            })
        } else {
            res.status(400).json({
                singleBrand : [],
                message : "Single brand not found!"
            })
        }
        
    } catch (error) {
        next(error)
    }
}

// Single brand delete...
export const deleteSingleProductBrand = async (req,res,next) =>{
    // Get id...form url..
    const { id } = req.params;
    // Use try catch
    try {
        // Get data
        const allBrands = await Brand.findById(id);
        
        // Use condition
        if (allBrands.id == id) {
            const deleteData = await Brand.findByIdAndDelete(id);
            res.status(200).json({
                brand : deleteData,
                message : "Data delete successfull"
            })
        }
        
    } catch (error) {
        next(customError("Data not found!", 400))
    }
}

// Upage single data here..
export const updateProductSingleBrand = async (req,res,next) =>{
    // Get id from url
    const {id} = req.params;

    // Get from data...
    const {name} = req.body;

    // Use trycatch here..
    try {
        // Get updater use data...
        const singleBrand = await Brand.findById(id);
        // Find specific data...
        const updateProductBrand = await Brand.findByIdAndUpdate(id, {
            name, slug : name.toLowerCase().replace(/ /g, '-'), photo : req.file ? req.file.filename : singleBrand.photo
        },{new:true});
        res.status(203).json({
            brand : updateProductBrand,
            message : "Data update successfull"
        })
    } catch (error) {
        next(error)
    }
}

