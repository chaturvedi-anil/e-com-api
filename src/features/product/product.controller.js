import ProductModel from "./product.model.js";

export default class ProductController
{
    getAllProducts(req, res)
    {
        let products = ProductModel.GetAll();

        res.status(200).send(products);
    }
    addProduct(req, res)
    {
        return res.json({'message': "add product"});
    }

    rateProduct(req, res)
    {

    }

    getOneProduct(req, res)
    {

    }
}