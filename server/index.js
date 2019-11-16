const express = require('express');

const app = express();
const port = 4000;

app.use(express.static('public'));

app.get('/api/', (req, res) => {

})

app.post('/api/', (req, res) => {

})

app.put('/api/', (req, res) => {

})

app.delete('/api', (req, res) => {

})

app.listen(port, () => console.log('listening...'))

