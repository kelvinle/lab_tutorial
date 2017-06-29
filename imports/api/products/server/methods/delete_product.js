import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Products } from '/imports/api/products/products.js';

Meteor.methods({
  deleteProduct: function(product_id) {

    let deleteId = Products.remove(product_id);
    console.log("deleteId", deleteId);

    if(deleteId) {
      return "Success!!";
    } else {
      return "Error!!";
    }


  },

});
