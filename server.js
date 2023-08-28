// importing express
import express from 'express';
import ProductRoutes from "./src/features/product/product.routes.js";

const port = 8000;
const server = express();

// for all the product routes
server.use('/api/products', ProductRoutes);

server.get('/', (req, res)=>
{
    res.send('Express is running on 8000');
});

server.listen(port, (err)=>
{
    if(err) console.log('Error : ',err);

    console.log(`Express is running on ${port}`);
});