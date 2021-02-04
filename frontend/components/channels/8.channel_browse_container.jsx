import React from 'react';
import { connect } from 'react-redux';
import ChannelBrowse from './8.channel_browse'
import { openModal, closeModal } from '../../actions/modal_actions'
import { createMembership, fetchAllMemberships } from '../../actions/membership_action'
import { channelAddSelector} from '../../reducers/channel_selector'


const msp = (state) => {
    return ({
        currentUser : state.session.currentUser,
        channelAddSelector: channelAddSelector(state)

    })
}

const mdp = (dispatch) => ({
    closeModal: () => dispatch(closeModal()),

})

export default connect(msp, mdp)(ChannelBrowse)