import React from 'react';
import { Redirect, Route, Switch, Link} from 'react-router-dom';
import SignupContainer from './session/signup_container'
import HomeContainer from './home/home_container'
import LoginContainer from './session/login_container'
import { AuthRoute, ProtectedRoute } from '../util/route_utils'
import Errors from './error'
import ChannelCreateContainer from './channels/6.channel_create_container'
import ChannelHomeContainer from './channels/2.channels_home_container'
import Modal from './modal/modal';



const App = () => (
    <div>
        <Switch>
            <ProtectedRoute path="/home/channels/:channelId" component={ChannelHomeContainer} />
            <AuthRoute exact path="/login" component={LoginContainer} />
            <AuthRoute exact path="/signup" component={SignupContainer} />
            <Route exact path="/" component={HomeContainer} />
            <AuthRoute component={Errors} />
        </Switch>
        < Modal >
            <Link to="/home/channels" className="header-link"></Link>
            <ChannelCreateContainer />
        </Modal >

    </div>
);

export default App