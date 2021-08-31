import React, { Component } from "react";
import Image from "../assets/2090.jpg"

export default class Mainview1 extends Component {
  render() {
    return (
      <div>
        

        <div class="row" id="div1">

          <div class="col s6 white-text" id="text1">
            <h1>WELCOME to the world of Shadiblock powered by SOLANA Blockchain</h1>
            <h5>show your love to your loved one's Register NOW!!!</h5>
            <div class="col s12">

              <div class="col s6">
                <a href="/register" class="waves-effect waves-light btn light-blue darken-3">Register</a>
              </div>
              <div class="col s6">
                <a href="/blockchain" class="waves-effect waves-light btn light-blue darken-3">View Blockchain</a>
              </div>
            </div>

          </div>

          <div class="col s6" id="imageid">
            <img src={Image} height="550" width="auto"/>
          </div>
        </div>

      </div>

    );
  }


}