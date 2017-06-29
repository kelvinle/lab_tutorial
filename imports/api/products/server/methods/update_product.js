import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Products } from '/imports/api/products/products.js';

Meteor.methods({
    updateProduct: function(id, product) {
    console.warn('id ', id);
    console.warn('product ', product);

    let updateValue = {
      name: product.name,
      description: product.description,
      volume: product.volume
    }

    let productUpdate = Products.update({_id: id}, {$set: updateProduct});

    if(productUpdate) {
        return "success";
    } else {
        return "error";
    }

  },

});
