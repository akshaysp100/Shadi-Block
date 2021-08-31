import React, { Component } from "react";
import Dapplib from "../../../dapplib/src/dapp-lib";
import { Link } from 'react-router-dom';

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            groom: "",
            bride: "",
            date: "",
            place: ""
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const newLove = {
            groom: this.state.groom,
            bride: this.state.bride,
            date: this.state.date,
            place: this.state.place
        }
        Dapplib.sayHello(newLove)
            .then((data) => console.log(data.result))
            .catch((e) => console.log(e));
        console.log(newLove);
    }

    render() {
        return (
            <div className="regdiv">
                <div style={{ marginTop: "4rem" }} className="row">
                    <div className="col s8 offset-s2">
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <h4>
                                Register your <b>Love</b> below
                            </h4>
                            <p className="grey-text text-darken-1">
                                Don't have an idea? <Link to="/blockchain">Look at our <b>Blockchain</b></Link>
                            </p>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div class="row">
                                <div class="col s5">
                                    <div className="input-field col s12">
                                        <input
                                            onChange={this.onChange}
                                            value={this.state.groom}
                                            id="groom"
                                            type="text"
                                        />
                                        <label htmlFor="email">Me</label>
                                    </div>
                                </div>
                                <div class="col s2">
                                <i className="material-icons left" style={{ marginLeft: "19px" , marginTop:"15px", color:"red", fontSize:"36px"}}>favorite</i>
                                </div>
                                <div class="col s5">
                                    <div className="input-field col s12">
                                        <input
                                            onChange={this.onChange}
                                            value={this.state.bride}
                                            id="bride"
                                            type="text"

                                        />
                                    <label  htmlFor="email">My Love</label>
                                    </div>
                                </div>
                            </div>
                            <div class="col s5">
                                    <div className="input-field col s12">
                                        <input
                                            onChange={this.onChange}
                                            value={this.state.date}
                                            id="date"
                                            type="text"
                                        />
                                        <label htmlFor="email">Date (01-01-2021)</label>
                                    </div>
                                </div>
                                <div class="col s2">
                                <i className="material-icons left" style={{ marginLeft: "19px" , marginTop:"15px", color:"red", fontSize:"36px"}}>supervised_user_circle</i>
                                </div>
                                <div class="col s5">
                                    <div className="input-field col s12">
                                        <input
                                            onChange={this.onChange}
                                            value={this.state.place}
                                            id="place"
                                            type="text"

                                        />
                                    <label  htmlFor="email">Place</label>
                                    </div>
                                </div>
                            <button
                                style={{
                                    width: "150px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px",
                                    marginTop: "1rem"
                                }}
                                type="submit"
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}