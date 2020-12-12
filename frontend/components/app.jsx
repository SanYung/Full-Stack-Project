import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SignupContainer from './session/signup_container'
import HomeContainer from './home/home_container'
import LoginContainer from './session/login_container'
import NavBarContainer from './nav_bar/nav_bar_container'
import { AuthRoute, ProtectedRoute } from '../util/route_utils'
import Errors from './error'
import ChannelsMainContainer from './channels_main/channels_main_container';
// import Home from './home/home'

const App = () => (
    <Switch>
        <AuthRoute exact path="/" component={HomeContainer} />
        <AuthRoute exact path="/login" component={LoginContainer} />
        <AuthRoute exact path="/signup" component={SignupContainer} />
        <ProtectedRoute exact path="/channels" component={ChannelsMainContainer} />
        <Route component={Errors} />
    </Switch>
);

export default App