import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class TopNavigation extends Component {
  render() {
    return (

      <div class="navbar-fixed">
        
        <nav class="N/A transparent ">
          <div >
            <a href="/" class="brand-logo"> &nbsp;&nbsp;&nbsp;Shadiblock</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><a href="/">Home</a></li>
              <li><a href="/blockchain">Blockchain</a></li>
              <li><a href="/register">Register</a></li>
              {/* <li><Link to='/'>Home</Link></li>
              <li><Link to='/blockchain'>Blockchain</Link></li>
              <li><Link to='/register'>Register</Link></li> */}

            </ul>
          </div>
        </nav>
      </div>

    );
  }
}
