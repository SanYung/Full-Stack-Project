import React from 'react';
import { connect } from 'react-redux';
import DmsCreate from './2.dms_create';
import { fetchUsers } from '../../actions/session_action'
import { createDms } from '../../actions/dms_action'
import { closeModal } from '../../actions/modal_actions'
import { createChannel } from '../../actions/channel_action'


const msp = (state) => ({
    users: state.entities.users
})

const mdp = (dispatch) => ({
    createChannel: ((channel) => dispatch(createChannel(channel))), 
    createDms: ((message) => dispatch(createDms(message))),
    fetchUsers: (() => dispatch(fetchUsers())),
    closeModal: () => dispatch(closeModal())
})

export default connect(msp, mdp)(DmsCreate)