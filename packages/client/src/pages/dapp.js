import React, { Component } from "react";
import TopNavigation from "../components/top-navigation";
import Mainview1 from "../components/mainview1";
import Mainview2 from "../components/mainview2";
import Footer from "../components/footer";

export default class Landing extends Component {
  render() {
    return (
      <div>

        <TopNavigation />

        <Mainview1 />


        <Mainview2 />

        <Footer />
        

      </div>

    );
  }
}
