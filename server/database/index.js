const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mvp', {useNewUrlParser: true});

const db = mongoose.connection;




module.exports.db = db;

