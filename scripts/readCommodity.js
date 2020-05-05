const Order = require('../schema/order'); 
const Commodity =  require('../schema/shop');
const Custtomer = require('../schema/customer');


const readCommodity = () => {
    let arr = []; 
        Order.find().populate('customer_id').populate('commodity_id').exec((err, res) => {
            if (err) throw err;
            for (i = 0; i < res.length; i++) {
                if (res[i].commodity_id.amount > res[i].amount) {
                    let total = res[i].commodity_id.amount - res[i].amount;
                    let result = `${res[i].customer_id.name}, not enough: ${res[i].commodity_id.name} ${total}`;
                    arr.push(result);
                } else {
                    let result = `${res[i].customer_id.name}: "OK"`;
                    arr.unshift(result);
                }
            }
            array = arr.join('\n');
            console.log(array);
        })
    };
    readCommodity();
    
    module.exports = readCommodity;