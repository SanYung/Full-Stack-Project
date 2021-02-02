import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions/post_action';


import PostCreate from './post_create'
import {withRouter} from 'react-router-dom'


const msp = (state, ownProps) => {
    return({
    user_id: state.session.currentUser.id,
    channel: state.entities.channels[ownProps.match.params.channelId],
    })}

const mdp = (dispatch) => ({
    createPost: ((post) => dispatch(createPost(post))),
   
})

export default withRouter(connect(msp, mdp)(PostCreate))