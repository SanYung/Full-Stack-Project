import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.user) {
        const preloadedState = {
            session: { currentUser: window.user },
            entities: {
                users: { [window.user.id]: window.user }
            }
        };
        store = configureStore(preloadedState);
        delete window.user;
    } else {
        store = configureStore();
    } 
    window.getState = store.getState 
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});
