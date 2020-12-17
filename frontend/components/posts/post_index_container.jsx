import React from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_action';
import PostIndex from './post_index';


const msp = (state, ownProps) => ({
    posts: Object.values(state.entities.posts).filter((post) => post.channel_id === parseInt(ownProps.match.params.channelId)),
    channelId: ownProps.match.params.channelId,
    channel: state.entities.channels[ownProps.match.params.channelId],
    users: state.entities.users
})

const mdp = (dispatch) => ({
    fetchPosts: ((channelId) => dispatch(fetchPosts(channelId)))
})

export default withRouter(connect(msp, mdp)(PostIndex))