import React from 'react';
import { connect } from 'react-redux';
import ChannelAdd from './16.channel_add'
import { openModal, closeModal } from '../../actions/modal_actions'
import { createMembership, fetchAllMemberships } from '../../actions/membership_action'
import { channelSelector} from '../../reducers/channel_selector'


const msp = (state) => {
    return ({
        currentUser : state.session.currentUser,
        unjoinedChannels: channelSelector(state)

    })
}

const mdp = (dispatch) => ({
    closeModal: () => dispatch(closeModal()),

})

export default connect(msp, mdp)(ChannelAdd)