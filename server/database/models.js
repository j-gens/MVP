const schema = require('./schemas.js');


exports.getAllArenas = (callback) => {
  schema.Arena.find({}).exec(callback);
}

exports.getOneArena = (arenaId, callback) => {
  schema.Arena.find({_id: arenaId}).exec(callback);
}

exports.getAllLists = (callback) => {
  schema.UserList.find({}, (err, data) => {
    callback(err, data);
  })
}

exports.getAllUsers = (callback) => {
  schema.User.find({}, (err, data) => {
    callback(err, data);
  })
}

exports.saveUser = (user, callback) => {
  let newUser = new schema.User({
    username: user
  });
  newUser.save((err, data) => {
    callback(err, data);
  })
}

exports.saveList = (list, callback) => {
  let newList = new schema.UserList({
    _userName: list.userName,
    list: [{
      arenaName: list.arenaName,
      date: list.date,
      homeTeam: list.homeTeam,
      awayTeam: list.awayTeam
    }]
  });
  newList.save((err, data) => {
    callback(err, data);
  })
}

exports.updateList = (user, arena, callback) => {
  let username = '';
  schema.UserList.find({_username: name}, { },(error, data) => {
    callback(error, data);
  })
}


