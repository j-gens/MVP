const express = require('express');
const db = require('./database/index.js');
const models = require('./database/models.js');

const app = express();
const port = 4000;

app.use(express.static('public'));

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

//NOT USED YET - get details for an individual arena
// app.get('/api/arena/:arenaId', (req, res) => {
//   console.log('single arena id => ', req.params.arenaId);
//   models.getOneArena(req.params.arenaId, (err, data) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//     res.status(200).send(data);
//   })
// })

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
  models.getListbyUser(req.params.username, (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(data);
  })
})

//update a current user's list
app.put('/api/lists', (req, res) => {
  models.saveArenaToList(req.body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(data);
  })
})

app.delete('/api/', (req, res) => {

})

app.listen(port, () => console.log('listening...'))

