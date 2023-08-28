import { Router } from "express";
import ProductController from "./product.controller.js";

const productRouter = Router();
 
const productController = new ProductController();

productRouter.get('/', productController.getAllProducts);
productRouter.post('/', productController.addProduct);

export default productRouter;