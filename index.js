const express = require('express');
const routerApi = require('./routes')

const app = express();
const port = 3000;

app.get('/', (require, response) => {
    response.send('Hola mi server en express');
})

app.get('/nueva-ruta', (require, response) => {
  response.send('Hola, soy una nueva ruta')
})

routerApi(app)

app.listen(port, () => {
    console.log('my port ' + port)
});
