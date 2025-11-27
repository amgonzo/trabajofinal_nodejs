import express from "express"
import { login } from "../controllers/auth.controllers.js"

const routes = express.Router()
//console.log("llego");
routes.post("/login", login)

export default routes;