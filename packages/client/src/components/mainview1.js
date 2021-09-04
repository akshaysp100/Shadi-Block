import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slide from "react-reveal/Slide"


export default class Mainview1 extends Component {
  render() {
    return (
      <div className="container" style={{ "marginLeft": "30px", "marginTop": "60px", "fontSize": "22px", }}>
        <div class="row" id="div1">
          <Slide left cascade>
            <div>
              <div class="col s6 white-text" id="text1">
                <h1>Welcome to ShadiBlock  Solanas BlockChain for Lovers</h1>
                <h5 style={{ "fontSize": "36px" }}>A one-stop destination to Carve your names on the BlockChain forever!!!</h5>
                <div class="col s12">
                  <div class="row"></div>
                  <div class="row"></div>
                  <div class="col s6">
                    <Link
                      to="/register"
                      style={{
                        width: "140px",
                        borderRadius: "10px",
                        letterSpacing: "1.5px",
                        width: "50%",
                        margin: "6px 6px",
                        fontFamily: "sans-serif"
                      }}
                      className="btn btn-large waves-effect waves-light hoverable red"
                    >
                      Register
                    </Link>
                  </div>

                  <div class="col s6">
                    <Link
                      to="/blockChain"
                      style={{
                        width: "140px",
                        borderRadius: "10px",
                        letterSpacing: "1.5px",
                        width: "50%",
                        margin: "6px 6px",
                        fontFamily: "sans-serif"
                      }}
                      className="btn btn-large waves-effect waves-light hoverable red"
                    >
                      BlockChain
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </div>

    );
  }


}