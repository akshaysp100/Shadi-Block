import React, { Component, useRef, useState } from "react";
import Dapplib from "../../../dapplib/src/dapp-lib";
import { Link } from 'react-router-dom';
import axios from "axios";
import Preview from "./Preview";
import Slide from "react-reveal/Slide";
import LightSpeed from 'react-reveal/LightSpeed';

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            groom: "",
            bride: "",
            date: "",
            place: "",
            isLoading: false,
            certificate: null,
            resdata: null,
        }
        this.certsec= React.createRef()

    }

    onregpres = () => {
        window.scrollTo(
            {
                top: this.certsec.current.offsetTop,
                behavior: "smooth"
            }
        )
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = async (e) => {
        e.preventDefault();
        this.onregpres();
        const newLove = {
            groom: this.state.groom,
            bride: this.state.bride,
            date: this.state.date,
            place: this.state.place
        }
        await Dapplib.sayHello(newLove)
            .then((data) => this.setState({ resdata: data }))
            .catch((e) => console.log(e));
        //console.log(newLove);

        this.setState({
            isLoading: true
        });

        const url = ["https://api.make.cm/make/t/6126935f-26d3-41cb-bba7-586024ff8ade/sync"];

        const headers = {
            'Content-Type': 'application/json',
            'X-MAKE-API-KEY': ["14f53d3be9063f0bf978b070071010ef18998c46"],
        }

        console.log(this.state.resdata);


        const data = {
            size: 'A4',
            'format': 'pdf',
            'data': {
                name1: newLove.groom,
                name2: newLove.bride,
                place: newLove.place,
                lovedate: newLove.date,
                txhash: this.state.resdata.result.txHash,
                txlink: this.state.resdata.result.explorer,
                date: new Date().toDateString().split(' ').slice(1).join(' ')
            },
            'postProcessing': {
                optimize: true
            }
        }


        await axios.post(url, data, {
            headers: headers
        })
            .then((response) => {
                //console.log(response)
                this.setState({
                    isLoading: false,
                    certificate: response.data.resultUrl
                });
            }, (error) => {
                console.log(error);
                this.setState({
                    isLoading: false
                });
            });
    }

    render() {

        const { certificate, isLoading } = this.state;

        return (
            <div class="row">
                <div className="regdiv">
                    <div style={{ marginTop: "9rem" }} className="row">
                        <div className="col s8 offset-s2">
                            <Slide left cascade>
                                <div>
                                    <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                        <h4 style={{ "color": "white" }}>
                                            Register your <b>Love</b> below
                                        </h4>
                                        <p className="grey-text text-darken-1">
                                            Don't have an idea? <Link to="/blockchain">Look at our <b>Blockchain</b></Link>
                                        </p>
                                    </div>
                                </div>
                            </Slide>
                            <form noValidate onSubmit={this.onSubmit}>
                                <div class="row">
                                    <Slide left cascade>
                                        <div>
                                            <div class="col s5">
                                                <div className="input-field col s12">
                                                    <input
                                                        onChange={this.onChange}
                                                        value={this.state.groom}
                                                        id="groom"
                                                        type="text"
                                                        color="white"
                                                        style={{"color":"white"}}
                                                    />
                                                    <label htmlFor="email">Me</label>
                                                </div>
                                            </div>
                                            <div class="col s2">
                                                <i className="material-icons left" style={{ marginLeft: "45px", marginTop: "15px", color: "red", fontSize: "36px" }}>favorite</i>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide right cascade>
                                        <div>
                                            <div class="col s5">
                                                <div className="input-field col s12">
                                                    <input
                                                        onChange={this.onChange}
                                                        value={this.state.bride}
                                                        id="bride"
                                                        type="text"
                                                        style={{"color":"white"}}
                                                    />
                                                    <label htmlFor="email">My Love</label>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                                <div class="row">
                                    <Slide left cascade>
                                        <div>

                                            <div class="col s5">
                                                <div className="input-field col s12">
                                                    <input
                                                        onChange={this.onChange}
                                                        value={this.state.date}
                                                        id="date"
                                                        type="text"
                                                        style={{"color":"white"}}
                                                    />
                                                    <label htmlFor="email">Date (01-01-2021)</label>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide right cascade>
                                        <div>
                                            <div class="col s2">
                                                <i className="material-icons left" style={{ marginLeft: "45px", marginTop: "15px", color: "red", fontSize: "36px" }}>supervised_user_circle</i>
                                            </div>
                                            <div class="col s5">
                                                <div className="input-field col s12">
                                                    <input
                                                        onChange={this.onChange}
                                                        value={this.state.place}
                                                        id="place"
                                                        type="text"
                                                        style={{"color":"white"}}
                                                    />
                                                    <label htmlFor="email">Place</label>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                                <LightSpeed left>
                                    <button
                                        style={{
                                            width: "150px",
                                            borderRadius: "3px",
                                            letterSpacing: "1.5px",
                                            marginTop: "3rem"
                                        }}
                                        type="submit"
                                        className="btn btn-large waves-effect waves-light hoverable red accent-3"
                                    >
                                        {isLoading ? "Registering" : "Register"}
                                    </button>
                                </LightSpeed>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="cert" ref={this.certsec} style={{ "marginTop": "6rem" }}>
                    <Preview certificate={certificate} isLoading={isLoading} />
                    <div class="container center-align" style={{"marginTop":"6px"}}>
                    {certificate && (
                        <a
                            class="center-align"
                            style={{"fontSize":"22px"}}
                            target="_blank"
                            rel="noreferrer"
                            href={certificate}
                        >
                            Download
                        </a>
                    )}
                    </div>
                </div>
            </div>
        );
    }
}