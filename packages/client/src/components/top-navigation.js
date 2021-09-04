import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class TopNavigation extends Component {
  render() {
    return (

      <div className="container" style={{"position":"sticky"}}>
        <div class="navbar-fixed">
          <nav class="N/A transparent container">
            <div class="row">
              <a href="/" class="brand-logo"> &nbsp;&nbsp;&nbsp;<span style={{"color":"#ffc414"}}>Shadi</span>block</a>

              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <div class="row">
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/register" >Register</Link></li>
                <li><Link to="/blockchain" >Blockchain</Link></li>
                </div>
              </ul>
            </div>
          </nav>
        </div>
      </div>

    );
  }
}
