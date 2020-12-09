import React from 'react';
import { Route } from 'react-router-dom';
import SignupContainer from './session/signup_container'
import NavBarContainer from './nav_bar/nav_bar_container'
import Home from './home/home'


export default () => (
    <div>
        <Route path="/" component={NavBarContainer}/>
        <Route path="/" component={Home} />
        <Route path="/signup" component={SignupContainer} />
    </div>
);