import React from 'react';
import { Redirect, Route, Switch, Link} from 'react-router-dom';
import SignupContainer from './session/signup_container'
import HomeContainer from './home/home_container'
import LoginContainer from './session/login_container'
import { AuthRoute, ProtectedRoute } from '../util/route_utils'
import Errors from './error'
import ChannelHomeContainer from './channels/2.channels_home_container'
import Modal from './modal/modal';



const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/login" component={LoginContainer} />
            <AuthRoute exact path="/signup" component={SignupContainer} />
            <Route exact path="/" component={HomeContainer} />
            <ProtectedRoute path="/home/channels" component={ChannelHomeContainer} />
            <AuthRoute component={Errors} />
        </Switch>

    </div>
);

export default App