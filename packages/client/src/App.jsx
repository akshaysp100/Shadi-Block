import React, { Component } from 'react';
import './components/top-navigation';
import './components/page-loader';

import {Route, Switch} from 'react-router-dom';

import Register from "./Register";
import Blockchain from "./Blockchain";
import Certificate from "./Certificate";
import Homepage from "./Homepage";
import Error from './Error';

class App extends Component {
  
  render() {
    return (
        <div className="flexible-content">
          
          {/* <top-navigation collapse="true" /> */}

          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route path="/blockchain" component={Blockchain}/>
            <Route path="/register" component={Register}/>
            <Route exact path="/certificate"component={Certificate}/>
            <Route component={Error}/>
          </Switch>

        {/* <switch> */}
          {/* <Blockchain path='/' Component={Blockchain}/>
          <Certificate path='/certificate' Component={Certificate} />
          <Register path='/register' Component={Register}/> */}
        {/* </switch> */}
          
          {/* <page-loader id="page-loader" />
          <Landing/> */}

        </div>
    );
  }
}

export default App;
