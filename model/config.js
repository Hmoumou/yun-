const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/YUNnode',{ useNewUrlParser:true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected!');
});

module.exports = db