import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

export const Products = new Mongo.Collection("products");

ProductSchema = new SimpleSchema({
  created_at: {
    type: Date,
    label: "created at",
    optional: true,
    denyUpdate: false,
    autoValue: function() {
      if (this.isInsert) return new Date();
      else if (this.isUpsert) return {$setOnInsert: new Date};
      else return this.unset();
    }
  },
  updated_at: {
    type: Date,
    label: "updated at",
    optional: true,
    denyInsert: true,
    autoValue: function() {
      if (this.isUpdate) return new Date();
    }
  },


  name: {
    type: String,
    label: "product name",
    max: 128
  },

  description: {
    type: String,
    label: "description",
    optional:true
  },

  price: {
    type: Number,
    label: "pricing",
    decimal: true,
    defaultValue: 0,
    optional: true
  },

  "flavors" : {
    type: [String],
    label: "flavors",
    optional: true
  },

  image: {
    type: String,
    label: "product image"
  },

  volume: {
    type: String,
    label: "volume",
    optional: true
  },

  user_id: {
    type: String,
    label: "user id",
    optional: true
  }

});

Products.attachSchema(ProductSchema);
