const Customer = require('../schema/customer');

const findCustomer = Customer.findOne({ name: 'Apple' }, function(err, answer){
  if(err) throw err;
  console.log(answer);
});

module.exports = findCustomer;