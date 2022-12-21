const express = require('express');
const app = express();
const port = 3000;

app.get('/', (require, response) => {
    response.send('Hola mi server en express');
})

app.listen(port, () => {
    console.log('my port ' + port)
});
