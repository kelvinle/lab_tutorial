import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { MassDrops } from '/imports/api/massdrops/massdrops.js';
Meteor.methods({
    addParticipant: function(id) {
    let selector = {_id:id}
    let curDrop = MassDrops.findOne(selector);
    let curTier = curDrop.cur_tier;
    let nextTier = null;
    if(curTier.id < curDrop.tiers.length){
      nextTier = curDrop.tiers[curTier.id+1];
    }
    let updateParticipants = curDrop.participants+1;
    console.log('updateParticipants', updateParticipants);
    let updateValue={
      participants:updateParticipants,
    }
    if( nextTier && updateParticipants == nextTier.participants){
      //update cur_tier
      curTier = nextTier;
      updateValue.cur_tier = curTier;
    }
    let massdropId = MassDrops.update(selector, {$set:updateValue});
    if(massdropId) {
        return "success";
    } else {
        return "error";
    }
  },
});
