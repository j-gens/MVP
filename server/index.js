const express = require('express');
const db = require('./database/index.js');
const models = require('./database/models.js');

const app = express();
const port = 4000;

app.use(express.static('public'));

//get a list of all arenas
app.get('/api/arenas/', (req, res) => {
  models.getAllArenas((err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(data);
  })
})

//get details for an individual arena
app.get('/api/arena/:arenaId', (req, res) => {
  console.log('single arena id => ', req.params.arenaId);
  models.getOneArena(req.params.arenaId, (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(data);
  })
})

//get list of users
app.get('api/users', (req, res) => {
  models.getAllUsers((err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(data);
  })
})

//save a new user
app.post('/api/users', (req, res) => {
  console.log('body ', req.body)
  models.saveUser(req.body.data, (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(data);
  })
})

//update a current user list
app.put('/api/', (req, res) => {

})

app.delete('/api/', (req, res) => {

})

app.listen(port, () => console.log('listening...'))

