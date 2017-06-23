import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Header extends Component {

  render() {
    return (
      <ul className="nav nav-tabs">
        <li  className="active red"><Link to="/" className = "red">Home</Link></li>
        <li ><Link to="/Page2">Page2</Link></li>
        <li ><Link to="/Page3">Page3</Link></li>
      </ul>
    )
  }
}
