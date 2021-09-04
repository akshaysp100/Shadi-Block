import React, { Component } from 'react';
import TopNavigation from './components/top-navigation';
import Form from './components/form';
import './components/page-loader';
import Footer from "./components/footer";
import "./assets/1.css"



const Register = () => {
    return (
        <div id="sdn" className="flexible-content" >



            <div>
                <TopNavigation />
                <Form />
                <Footer />


            </div>



        </div>

    );
};

export default Register;
