// Package init...
import multer from "multer";

// 
const storage = multer.diskStorage({
    destination : (req,file,cb) =>{
        if (file.fieldname == "category-photo") {
            cb(null, "api/public/categories/images")
        }
        if (file.fieldname == "brand-photo") {
            cb(null, "api/public/brands/images")
        }
        if (file.fieldname == "product-photo" || file.fieldname == "product-gallery-photo") {
            cb(null, "api/public/products/images")
        }
    },
    filename : (req,file,cb) =>{
        cb(null, Date.now() + "_" + Math.floor(Math.random() * 1000000000) +"_"+ file.originalname)
    }
});

export const productCategoryMulter = multer({storage}).single("category-photo");
export const productBrandMulter = multer({storage}).single("brand-photo");
export const productMulter = multer({storage}).fields([
    {
        name : "product-photo",
        maxCount : 1
    },
    {
        name : "product-gallery-photo",
        maxCount : 10
    }
]);