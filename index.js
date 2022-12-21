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

app.listen(port, () => {
    console.log('my port ' + port)
});
