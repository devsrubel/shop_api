// Package init...
import express from "express";
import { createProductBrand, deleteSingleProductBrand, getAllProductBrands, getSingleProductBrand, updateProductSingleBrand } from "../../controllers/productBrandControllers.js";
import { createProductCategory, deleteSingleProductCategory, getAllProductCategories, getSingleProductCategory, updateProductSingleCategory } from "../../controllers/productCategoriesControllers.js";
import { productBrandMulter, productCategoryMulter } from "../../utils/productMulter.js";

// Create roter...
const router = express.Router();

// Create routing system..here...
// Just for category....
router.route("/category").get(getAllProductCategories).post(productCategoryMulter, createProductCategory);
router.route("/category/:slug").get(getSingleProductCategory);
router.route("/category/:id").delete(deleteSingleProductCategory).put(productCategoryMulter, updateProductSingleCategory).patch(productCategoryMulter,updateProductSingleCategory);

// Just for brand....
router.route("/brand").get(getAllProductBrands).post(productBrandMulter, createProductBrand);
router.route("/brand/:slug").get(getSingleProductBrand);
router.route("/brand/:id").delete(deleteSingleProductBrand).put(productBrandMulter, updateProductSingleBrand).patch(productBrandMulter,updateProductSingleBrand);

// Export router here..
export default router;