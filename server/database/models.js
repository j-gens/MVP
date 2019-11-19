const schema = require('./schemas.js');


exports.getAllArenas = (callback) => {
  schema.Arena.find({}).exec(callback);
}

// exports.getOneArena = (arenaId, callback) => {
//   schema.Arena.find({_id: arenaId}).exec(callback);
// }

exports.getListByUser = (user, callback) => {
  schema.UserList.find({username: user}, (err, data) => {
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
    userName: user
  });
  newUser.save((err, data) => {
    callback(err, data);
  })
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


