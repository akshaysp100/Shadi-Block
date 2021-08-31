import React, { Component } from "react";
import DappLib from "../../dapplib/src/dapp-lib";
import TopNavigation from "./components/top-navigation";

export default class BlockChain extends Component {
  constructor() {
    super()
    this.state = {
      response: []
    }
    this.loveget = this.loveget.bind(this);
  }

  componentDidMount() {
    this.loveget();
    console.log(this.response);
  }

  async loveget() {
    let res = await DappLib.countHellos();
    this.setState({
      response: res.result
    });
  }

  render() {

    const { response } = this.state;

    const ideasits = Array.from(response).map((love, key) =>
    (
      <div class="col s18 m18" key={key}>
        <div class="card #76ff03 light-green accent-3" style={{ borderRadius: "15px" }}>
          <div class="row">
            <div class="col s4">
              <div class="card-content black-text" style={{ marginBottom: "3rem" }}>
                <span class="card-title">{love.groom}</span>
              </div>
            </div>
            <div class="col s2">
              <i className="material-icons left" style={{ marginLeft: "10px", marginTop: "15px", color: "red", fontSize: "30px" }}>favorite</i>
            </div>
            <div class="col s4">
              <div class="card-content black-text" style={{ marginBottom: "3rem" }}>
                <span class="card-title">{love.bride}</span>
              </div>
            </div>
            <div class="col s4">
              <div class="card-content black-text" style={{ marginBottom: "3rem" }}>
                <span class="card-title">{love.date}</span>
              </div>
            </div>
            <div class="col s2">
              <i className="material-icons left" style={{ marginLeft: "10px", marginTop: "15px", color: "red", fontSize: "30px" }}>supervised_user_circle</i>
            </div>
            <div class="col s4">
              <div class="card-content black-text" style={{ marginBottom: "3rem" }}>
                <span class="card-title">{love.place}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));

    return (
      <div>
        <TopNavigation />
        <div>
          <div className="col s12 center-align" style={{ paddingTop: "3px", paddingBottom: "50px", marginTop: "79px" }}>
            <h4 style={{ fontSize: "45px", letterSpacing: "2px", wordSpacing: "6px" }}>
              Welcome To  <b>ShadiBlock</b>  the Abode of Love
            </h4>
            <h6 style={{ fontSize: "21px" }} className="flow-text grey-text text-darken-1">
              Ready to bring your Love into Life ? Ofcourse right! Then Register Now !!!
            </h6>
          </div>
          <div class="">
            <div style={{ marginTop: "3rem" }} className="row">
              <div className="col s16">
                {ideasits}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
