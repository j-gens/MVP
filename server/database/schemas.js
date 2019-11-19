const mongoose = require('mongoose');

const arenaSchema = mongoose.Schema({
  _id: Number,
  arenaName: String,
  city: String,
  stateProvince: String,
  team: String
})

const userListArenas = mongoose.Schema({
  arenaName: String,
  date: String,
  homeTeam: String,
  awayTeam: String
})

const userListSchema = mongoose.Schema({
  _userName: String,
  list: [userListArenas]
})

const userSchema = mongoose.Schema({
  username: String
})


const Arena = mongoose.model('Arena', arenaSchema);
const UserList = mongoose.model('UserList', userListSchema);
const User = mongoose.model('User', userSchema)

module.exports.Arena = Arena;
module.exports.UserList = UserList;
module.exports.User = User;
