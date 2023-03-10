const express = require('express');
const routerApi = require('./routes')
const cors = require('cors')
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = 3000;

app.use(express.json());

const whiteList = ['http://localhost:8080', 'https://myapp.co']
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  }
}
app.use(cors(options));

app.get('/', (require, response) => {
    response.send('Hola mi server en express');
})

app.get('/nueva-ruta', (require, response) => {
  response.send('Hola, soy una nueva ruta')
})

routerApi(app)

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.log('my port ' + port)
});
