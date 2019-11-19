const schema = require('./schemas.js');


exports.getAllArenas = (callback) => {
  schema.Arena.find({}).exec(callback);
}

exports.getAllUsers = (callback) => {
  schema.User.find({}, (err, data) => {
    callback(err, data);
  })
}

exports.saveUser = (user, callback) => {
  let newUser = new schema.User({
    userName: user
  });
  newUser.save((err, data) => {
    callback(err, data);
  })
}

exports.getListByUser = (user, callback) => {
  schema.UserList.find({userName: user}).exec(callback);
}

exports.saveArenaToList = (list, callback) => {
  let newList = new schema.UserList({
    userName: list.userName,
    arenaName: list.arenaName,
    date: list.date,
    homeTeam: list.homeTeam,
    awayTeam: list.awayTeam
  });
  newList.save((err, data) => {
    callback(err, data);
  })
}

exports.deleteArenaFromList = (arena, callback) => {

}


