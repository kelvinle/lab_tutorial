import React, {Component} from 'react';
import {Link} from 'react-router';
export default class DropGrid extends Component {
  render() {
    //find out current tier
    //get needed participants from tier participants - current participants
    //display needed participants and next tier price
    let product = this.props.product;
    let curTier = product.cur_tier;
    let curParticipants = product.participants;
    let tiers = product.tiers;
    let nextTier = null;
    let needParticipants = 0;
    if(curTier.id < tiers.length-1){
      nextTier = tiers[curTier.id+1];
      needParticipants = nextTier.participants - product.participants;
      nextPrice = nextTier.price;
    }

    let addParticipant = () => {

      Meteor.call("addParticipant", product._id);
    }
    return (
      <div className="col-sm-4">
        <img className="img-responsive"   src={product.images[0]}/>
        <h2 className="text-center"> {product.product_name}  </h2>
        <div className="text-center">
          {product.cur_tier.price < product.org_price ? <span><s>${product.org_price}</s><span>${product.cur_tier.price}</span></span>
          :<span > ${product.org_price} </span> }
          <div>{nextTier ? <span>{needParticipants} more people needed for this price ${nextPrice}</span>
          : <span></span>}</div>
          {/* <Link to={'/drops/' + product.product_id}> */}
            <button onClick={addParticipant} className="btn btn-primary text-center">Participate Now</button>
          {/* </Link> */}
        </div>
      </div>
    )
  }
}
