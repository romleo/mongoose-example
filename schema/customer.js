const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    address: String,
}, {
    versionKey: false
});

module.exports = mongoose.model('Customer', customerSchema);
