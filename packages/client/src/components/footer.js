import React, { Component } from "react";


export default class Footer extends Component {
    render() {
        return (
            <div>

                <footer class="page-footer" style={{"backgroundColor":"rgba(0,0,0, 0.6)"}}>
                    <div class="container ">
                        <div class="row">
                            <div class="col l6 s12">
                                <h2 class="white-text">©Shadiblock</h2>
                                <p class="grey-text text-lighten-4">On the way to revolutionalize how we express LOVE</p>
                            </div>
                            <div class="col l3 offset-l2 s13">
                                <h4 class="white-text">Follow us on Social Media</h4>
                                <ul>
                                    <li><a class="grey-text text-lighten-3" href="https://www.instagram.com" target="_">Instagram</a></li>
                                    <li><a class="grey-text text-lighten-3" href="https://www.facebook.com" target="_">Facebook</a></li>
                                    <li><a class="grey-text text-lighten-3" href="https://www.twitter.com" target="_">Twitter</a></li>
                                    <li><a class="grey-text text-lighten-3" href="https://www.github.com" target="_">Github</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="footer-copyright">
                        <div class="container">
                            © 2021 Shadiblock
                        </div>
                    </div>
                </footer>

            </div>

        );
    }


}