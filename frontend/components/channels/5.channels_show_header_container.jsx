import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchChannel, fetchChannels, updateChannel } from '../../actions/channel_action';
import ChannelShowHeader from './5.channels_show_header';
import { openModal } from '../../actions/modal_actions'
import { fetchMemberships } from '../../actions/membership_action';
import { channelMembersCount, dmsTitlex} from '../../reducers/channel_selector'
import {openDetail} from '../../actions/detail_actions'

const msp = (state, ownProps) => {
    return ({
    currentUser: state.session.currentUser,
    memberships: state.entities.memberships,
    count: channelMembersCount(state, ownProps),
    dmsTitlex: dmsTitlex(state, ownProps),
    currentChannel: state.entities.allchannels[ownProps.match.params.channelId],
    users : state.entities.users


    })}

const mdp = (dispatch) => ({
    fetchChannel: ((channelId) => dispatch(fetchChannel(channelId))),
    openModal: modal => dispatch(openModal(modal)),
    fetchMemberships: () => dispatch(fetchMemberships()),
    fetchChannels: (userId) => dispatch(fetchChannels(userId)),
    updateChannel: ((channel) => dispatch(updateChannel(channel))),
    openDetail: () => dispatch(openDetail())


})

export default withRouter(connect(msp, mdp)(ChannelShowHeader))