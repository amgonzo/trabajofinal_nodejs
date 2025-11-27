import express from "express"
import {
    getAllProducts,
    getProductById,
    addProduct,
    deleteProductById,
    updateProduct
} from "../controllers/products.controllers.js"
import { authentication } from "./src/middleware/authentication.js"

const routes = express.Router()

routes.get("/products", getAllProducts)

routes.get("/products/:id", getProductById)

routes.post("/products/create", authentication, addProduct)

routes.delete("/products/:id",  authentication, deleteProductById)

routes.put("/products/:id",  authentication, updateProduct)

export default routes;