import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SignupContainer from './session/signup_container'
import HomeContainer from './home/home_container'
import LoginContainer from './session/login_container'
import NavBarContainer from './nav_bar/nav_bar_container'
import { AuthRoute, ProtectedRoute } from '../util/route_utils'
import Errors from './error'
// import Home from './home/home'

const App = () => (
    <div>
        <Route path="/" component={NavBarContainer} />
        <Route exact path="/" component={HomeContainer} />
        <AuthRoute exact path="/login" component={LoginContainer} />
        <AuthRoute exact path="/signup" component={SignupContainer} />
        <Route component={Errors} />
    </div>
);

export default App