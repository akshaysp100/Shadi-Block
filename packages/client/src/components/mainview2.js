import React, { Component } from "react";
import Slide from "react-reveal/Slide";

export default class Mainview2 extends Component {
    render() {
        return (
            <div className="container" style={{ "marginLeft": "33px", "marginTop": "-90px" }}>
                <div class="row">
                    <Slide left cascade>
                    <div>
                        <h1 class="valign-wrapper" style={{ "color": "white", "paddingBottom": "15px" }} >
                            How it works
                        </h1>
                    </div>
                    </Slide>
                    <div class="col s6">
                        <div>
                            <div id="div2" class="white-text">

                                <div class="row">
                                    <div class="col s12 m6">
                                        <div class="card" style={{ "padding": "22px 22px" }}>
                                            <div class="card-content white-text">
                                                <span class="card-title">1. Register Your Love</span>
                                                <p>Go to register page and plug in the your and your lover name, place it started and date it began. Then click register.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col s12 m6">
                                        <div class="card" style={{ "padding": "22px 22px" }}>
                                            <div class="card-content white-text">
                                                <span class="card-title">3. BlockChain</span>
                                                <p>You can view your details displayed in the Blockchain page which receives its data directly from the Solana Blockchain!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                    <div class="col s6">
                        <div class="row">
                            <div class="col s12 m6">
                                <div class="card" style={{ "padding": "22px 22px" }}>
                                    <div class="card-content white-text">
                                        <span class="card-title">2. Certificate of Love</span>
                                        <p>Download the Certificate of Love which is generated as your details is registered on the Blockchain Forever!</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col s12 m6">
                                <div class="card" style={{ "padding": "22px 22px" }}>
                                    <div class="card-content white-text">
                                        <span class="card-title">4. Trx Link</span>
                                        <p>You can paste the trx link provided in the Certificate to verify your details in the Solana Blockchain. Using the Solana Explorer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }


}