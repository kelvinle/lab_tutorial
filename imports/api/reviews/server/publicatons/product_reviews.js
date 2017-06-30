import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Reviews } from '/imports/api/reviews/reviews.js';

Meteor.publish("productReviews", function (productId) {

  let selector = {
    product_id: productId
  };

  console.warn('selector ', selector);
  console.warn('result ', Reviews.find(selector).fetch());
  return Reviews.find(selector);
});
