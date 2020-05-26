const express = require('express');
const path = require('path');
const db = require('./database/index.js');
const models = require('./database/models.js');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//get a list of all arenas
app.get('/api/arenas/', (req, res) => {
  models.getAllArenas((err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(data);
  })
})

//get list of all users in database
app.get('/api/users', (req, res) => {
  models.getAllUsers((err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(data);
  })
})

//save a new user to the database
app.post('/api/users', (req, res) => {
  models.saveUser(req.body.userName, (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(data);
  })
})

//get a user's list of arenas visited
app.get('/api/lists/:username', (req, res) => {
  models.getListByUser(req.params.username, (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(data);
  })
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
})


module.exports = app;
