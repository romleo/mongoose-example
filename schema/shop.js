const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const warehouseSchema = new Schema({
    name: String,
    price: Number,
    amount: Number
}, {
    versionKey: false
});

module.exports = mongoose.model('Shop', shopSchema);



//  var mongoose = require('mongoose');
//  mongoose.connect("mongodb://localhost;2717/shop",{userNewUrlParser: true});

//  var Schema = mongoose.Schema;

//     const tovarSchema = new Schema({
//         _id: Number,
//         name: String,
//         price: Number,
//         units: Number
//    });

//     const customerSchema = new Schema({
//         companyName: String,
//         address: String 
//     });
//     const orderSchema = new Schema({
//         orderDate: Date,
//         customerOrder: { type: Schema.Types.ObjectId,ref: 'Customer'},
//         orderList: [{ type:Schema.Types.ObjectId, ref: 'Tovar'}]
//     });

//     const Tovar = mongoose.model("Tovar", tovarSchema);
//     const tovar = new Tovar({
//         _id: Number,
//         name: String,
//         units: Number,
//         price: Number
//     });


//     const Customer = mongoose.model ("Customer", customerSchema);
//     const customer = new Customer ({
//         companyName: String,
//         address: String
//     });

//     customer.save(function(err)){
        
//     }
