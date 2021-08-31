import Landing from './pages/dapp';
import React, { Component } from 'react';
import './components/top-navigation';
import './components/page-loader';

export default class Homepage extends Component {
    render() {
        return (
            <div className="flexible-content">
                <top-navigation collapse="true" />
                <page-loader id="page-loader" />
                <Landing />
                
            </div>


        );
    }
}
