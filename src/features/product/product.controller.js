import ProductModel from "./product.model.js";

export default class ProductController
{
    getAllProducts(req, res)
    {
        let products = ProductModel.GetAll();

        // reponse as json
        res.status(200).send(products);
    }
    addProduct(req, res)
    {
        console.log(req.body);
        console.log('add product api');

        res.status(200).send('Post request received');
    }

    rateProduct(req, res)
    {

    }

    getOneProduct(req, res)
    {

    }
}