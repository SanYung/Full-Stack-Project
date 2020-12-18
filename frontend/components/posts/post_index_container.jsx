import React from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts, receivePost} from '../../actions/post_action';
import PostIndex from './post_index';
import { fetchUsers, fetchUser} from '../../actions/session_action'



const msp = (state, ownProps) => {
    // debugger
    return ({
    posts: Object.values(state.entities.posts).filter((post) => post.channel_id === parseInt(ownProps.match.params.channelId)),
    channelId: ownProps.match.params.channelId,
    channel: state.entities.channels[ownProps.match.params.channelId],
    users: state.entities.users
})}

const mdp = (dispatch) => ({
    fetchPosts: ((channelId) => dispatch(fetchPosts(channelId))),
    fetchUsers: (() => dispatch(fetchUsers())),
    fetchUser: ((userId) => dispatch(fetchUser(userId))),
    receivePost: ((post) => dispatch(receivePost(post)))
    
})

export default withRouter(connect(msp, mdp)(PostIndex))