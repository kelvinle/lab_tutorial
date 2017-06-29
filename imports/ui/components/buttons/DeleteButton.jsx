import React, {Component} from 'react';

export default class Name extends Component {

  render() {
    let productID = this.props.productID;
    let deleteProduct = () => {
        Meteor.call("deleteProduct", productID, function(error, result) {
          if (result === 'success') {
            console.warn('successful');
          }
          else {
            console.warn('error');
            return;
          }
    });
  }
    return (

        <button className= "btn-warning" onClick={deleteProduct}>delete</button>
    )
  }
}
