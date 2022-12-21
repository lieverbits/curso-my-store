const express = require('express');
const app = express();
const port = 3000;

app.get('/', (require, response) => {
    response.send('Hola mi server en express');
})

app.get('/nueva-ruta', (require, response) => {
  response.json({
    name: 'producto 1',
    price: 1000
  });
})

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Product 1',
      price: 1000
    },
    {
      name: 'Product 2',
      price: 3000
    }
  ]);
})

app.get('/products/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    name: 'Product 2',
    price: 3000
  });
})

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId
  });
})

app.listen(port, () => {
    console.log('my port ' + port)
});
