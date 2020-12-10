import React from 'react';
import { Route } from 'react-router-dom';
import SignupContainer from './session/signup_container'
import HomeContainer from './home/home_container'
import LoginContainer from './session/login_container'
import NavBarContainer from './nav_bar/nav_bar_container'
import { AuthRoute, ProtectedRoute } from '../util/route_utils'
// import Home from './home/home'


export default () => (
    <div>
        <Route path="/" component={NavBarContainer}/>
        <Route exact path="/" component={HomeContainer} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
    </div>
);