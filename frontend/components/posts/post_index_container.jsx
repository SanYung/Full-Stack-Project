import React from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts, receivePost} from '../../actions/post_action'
import PostIndex from './post_index';
import { fetchUsers, fetchUser} from '../../actions/session_action'
import { channelShowSelector, channelMembership} from '../../reducers/channel_selector'
import { createMembership } from '../../actions/membership_action'
import { fetchAllChannels, fetchChannels } from '../../actions/channel_action'

const msp = (state, ownProps) => {
    //  console.log('!!!!', ownProps.location.pathname )
    return ({
    posts: Object.values(state.entities.posts).filter((post) => post.channel_id === parseInt(ownProps.match.params.channelId)),
    channelId: ownProps.match.params.channelId,
    channel: state.entities.channels[(ownProps.match.params.channelId)],
    channelx: state.entities.allchannels[(ownProps.match.params.channelId)],
    users: state.entities.users,
    channels: state.entities.channels,
    allchannels: state.entities.allchannels,
    channelShowSelector: channelShowSelector(state, ownProps),
    currentUser: state.session.currentUser,
    channelMembership: channelMembership(state, ownProps),
    location: ownProps.location.pathname

})}

const mdp = (dispatch) => ({
    fetchPosts: ((channelId) => dispatch(fetchPosts(channelId))),
    fetchUsers: (() => dispatch(fetchUsers())),
    fetchUser: ((userId) => dispatch(fetchUser(userId))),
    receivePost: ((post) => dispatch(receivePost(post))),
    createMembership: (channelId, memberId) => dispatch(createMembership(channelId, memberId)),
    fetchAllChannels: () => dispatch(fetchAllChannels()),
    fetchChannels: (userId) => dispatch(fetchChannels(userId)),
})

export default withRouter(connect(msp, mdp)(PostIndex))