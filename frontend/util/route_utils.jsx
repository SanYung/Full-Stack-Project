import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom'

const msp = (state) => ({
    loggedIn: Boolean(state.session.currentUser) 
});

const Auth = ({ loggedIn, path, component: Component }) => (
    <Route 
        path={path} 
        render={props => (
            loggedIn ? <Redirect to="/home/channels/101" /> : <Component {...props}/>
        )}
    />
);

const Protected = ({ component: Component, path, loggedIn }) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/" />
        )}
    />
);

export const AuthRoute = withRouter(connect(msp)(Auth));
export const ProtectedRoute = withRouter(connect(msp, undefined)(Protected));

