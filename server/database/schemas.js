const mongoose = require('mongoose');

const arenaSchema = mongoose.Schema({
  _id: Number,
  arenaName: String,
  city: String,
  stateProvince: String,
  team: String
})

const userListSchema = mongoose.Schema({
  _id: Number,
  _userName: String,
  list: [{
    arenaName: String,
    dateDay: Number,
    dateMo: Number,
    dateYr: Number,
    homeTeam: String,
    awayTeam: String
  }]
})


const Arena = mongoose.model('Arena', arenaSchema);
const UserList = mongoose.model('UserList', userListSchema);

module.exports.Arena = Arena;
module.exports.UserList = UserList;
