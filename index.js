const mongoose = require('mongoose');
const Order = require('./schema/order');

mongoose.connect('mongodb://localhost/Mongoose_project', {
    useNewUrlParser: true
});
mongoose.set('useCreateIndex', true);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Mongoose conecting")
});
require('./db/createOrder');