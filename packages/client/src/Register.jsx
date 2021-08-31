import React, { Component } from 'react';
import TopNavigation from './components/top-navigation';
import Form from './components/form';
import './components/page-loader';

const Register = () => {
    return (
        <div className="flexible-content">
            <TopNavigation />
            <Form />    
        </div>
    );
};

export default Register;
