const express = require('express');
const { ProductManager } = require('./ProductManager');

const productManager = new ProductManager();
const app = express();

app.get('/products', async(req,res)=>{
    try {
      await productManager.loadData()
      res.send({ products: productManager.products });


    } catch (error) {
        console.error(`Error al obtener los productos: ${error}`);
    res.status(500).send({ error: 'Error al obtener los productos' });
    }
})

app.get('/products/:pid', async (req, res) => {
    try {
      const prodId = parseInt(req.params.pid);
      const product = await productManager.getProductById(prodId);
      if (!product) {
        res.status(404).send(`Product not found with id: ${prodId}`);
      } else {
        res.json(product);
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  });









app.listen(8080, () => console.log('servidor iniciado en el puerto 8080'))