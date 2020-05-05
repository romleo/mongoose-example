let result = [];
let names = [{ name: 'gym shoes', price: '45', amount: '15' }, { name: 'sneakers', price: '44', amount: '23' }];

function saveAll(){
    while( (i = names.shift()) !== undefined ) {
        
        // console.log(i);

        const createShop = new Shop({
            name: i.name,
            price: i.price,
            amount: i.amount
        })

        console.log('items', createShop);
          
        createWarehouse.save(function(err){
            if(err) throw err;
            console.log('Items created!!!');
            result.push(i)
            console.log('result', result);
        })
        
    }
}

saveAll();

//=========================================

const Shop = require('./schema/shop');

module.exports = function saveAll(){
  console.log('object',commoditysArr)
    Shop.insertMany(commoditysArr, function(err, docs) {
      if(err) { //throw err; 
          console.log('err', err);
      } else {
          console.log('docs', docs)
      }
    })
  }