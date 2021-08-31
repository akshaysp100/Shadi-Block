import React, { Component } from "react";

export default class Form extends Component {
    render() {
        return (
            <div class="row" id="formdiv">
                <form class="col s12">
                    <div class="row">
                        <br /><br /><br /><br /><br />
                        <div class="col s1">

                        </div>
                        <div>
                            <input type="text" placeholder="Me" id="me" type="text" class="validate center-align white-text" />
                        </div>

                        <div class=" col s2">
                            <select class="browser-default N/A transparent white-text">
                                <option value="" disabled selected>select</option>
                                <option value="1">Loves</option>
                                <option value="2">Weds</option>
                            </select>
                        </div>

                        <div class="input-field col s4 " backgroung-color="white" >
                            <input type="text" placeholder="Him/Her" id="mylove" type="text" class="validate center-align white-text " />
                        </div>

                        <div class="row"></div>
                        <div class="col s5"></div>
                        <div class="input-field col s2 ">
                            <input type="text" placeholder="Days of Love" id="daysoflove" type="text" class="center-align white-text" data-length="5" />
                        </div>

                        <div class="row"></div>
                        <div class="col s5"></div>
                        <div>
                            <form class="col s2">
                                <div class="row">
                                    <div class="input-field col s2">
                                        <input placeholder="place you both met" id="place" type="text" data-length="10" class="center-align white-text" />
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div class="row"></div>
                        <div class="col s9"></div>
                        

                    </div>
                </form>
                <div class="submitdiv">
                <a href="/certificate" class="waves-effect waves-light btn-small " id="submitbtn"> submit</a>

            </div>
            </div>

        );
    }
}