import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {Products} from '/imports/api/products/products.js';

console.log('inserting data...');

let data = [{
  name: 'Cali Yogo',
  image: 'https://swchllc.s3.amazonaws.com/photos/cali_yogo-strawberry.jpg',
  price: 15.99,
  flavors: ['strawberry', 'cream']
},
{
  name: 'Mango',
  image: 'https://swchllc.s3.amazonaws.com/products/salt/mango/0.png',
  price: 19.99,
  flavors: ['mango', 'spicy']
},
{
  name: 'Apple Shake',
  image: 'https://swchllc.s3.amazonaws.com/eliquids/milkshake_liquids-apple_shake.png',
  price: 14.99,
  flavors: ['apple', 'milk shake']
},
{
  name: 'Modzilla',
  image: 'https://swchllc.s3.amazonaws.com/eliquids/modzilla-_nuclear_fruit_punch.png',
  price: 15.99,
  flavors: ['grape', 'cherry', 'fruit punch']
},
{
  name: 'Pop Deez',
  image: 'https://swchllc.s3.amazonaws.com/eliquids/steep_vapors-pop_deez.png',
  price: 19.99,
  flavors: ['ice cream', 'fudge']
},
{
  name: 'Pow',
  image: 'https://swchllc.s3.amazonaws.com/photos/Binary_E_Liquid-Pow.jpg',
  price: 19.99,
  flavors: ['ice cream', 'fudge']
}
];

let checkProducts = Products.find({}).count();

//console.warn('checkProducts ', checkProducts);

for(i = 0; i < data.length; i++){
  let selector = {name: data[i].name};
  Products.upsert(selector, {$set: data[i]});
}

/*
if(checkProducts == 0){
  for(i = 0; i < data.length; i++){
    Products.insert(data[i]);
  }
}
*/
