import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import MainContainer from '/imports/ui/containers/MainContainer.jsx';
import HomeContainer from '/imports/ui/containers/HomeContainer.jsx';
import AdminContainer from '/imports/ui/containers/AdminContainer.jsx';
import ProductContainer from '/imports/ui/containers/ProductContainer.jsx';
import ProductEditContainer from '/imports/ui/containers/ProductEditContainer.jsx';
import ProductInsert from '/imports/ui/components/Products/ProductInsert.jsx';
import SignUp from '/imports/ui/pages/SignUp.jsx';
import SignIn from '/imports/ui/pages/SignIn.jsx';
import LoginSignUp from '/imports/ui/pages/LoginSignUp.jsx';
import DropsContainer from '/imports/ui/containers/DropsContainer.jsx';

//we're using react router
export default () => (
  <Router history={browserHistory}>
    <Route component={MainContainer}>
        <Route path="/" component={HomeContainer} />
        <Route path="/admin" component={AdminContainer} />
        <Route path="/product/:id" component={ProductContainer} />
        <Route path="/edit/:id" component={ProductEditContainer} />
        <Route path="/drops" component={DropsContainer} />
        <Route path="/insert" component={ProductInsert} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/login" component={LoginSignUp} />
      </Route>
    </Router>
  );
