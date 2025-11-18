import express from "express"
import {
    getAllProducts,
    getProductById,
    addProduct,
    deleteProductById,
    updateProduct
} from "../controllers/products.controllers.js"

const routes = express.Router()

routes.get("/products", getAllProducts)

routes.get("/products/:id", getProductById)

routes.post("/products/create", addProduct)

routes.delete("/products/:id", deleteProductById)

routes.put("/products/:id", updateProduct)

export default routes;