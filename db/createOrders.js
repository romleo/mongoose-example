const Order = require('../schema/order');
const Customer = require('../schema/customer');
const Shop = require('../schema/shop');


const nameCustom = 'Addidas';
const nameCommodity = 'shose';
const amountCommoditys = 100;

const myFunc = Customer.find({name: nameCustom}, function(err, custom){
  if(err) throw err;
  console.log(custom)
  
  Shop.find({name: nameCommodity}, function (err, goods){
      if(err) throw err;
      goods = goods.map(item => item.id);
      console.log(commoditys);
    
    
    const createOrder = new Order({
      date: Date.now(),
      customer_id: custom[0]._id,
      commoditys_id: commoditys,
      amount: amountCommoditys
    })
      
    createOrder.save(function(err){
      if(err) throw err;
      console.log('Order created!!!')
    })
  })
});
  


module.exports = myFunc;