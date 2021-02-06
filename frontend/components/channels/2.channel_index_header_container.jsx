import React from 'react';
import { connect } from 'react-redux';
import ChannelIndexHeader from './2.channel_index_header'
import { deleteSession } from '../../actions/session_action'

const msp = (state) => {
    return {
        currentUser: state.session.currentUser,
        user: state.entities.users[state.session.currentUser.id],
    }
}

const mdp = (dispatch) => ({
    deleteSession: (() => dispatch(deleteSession())),
});

export default connect(msp, mdp)(ChannelIndexHeader)