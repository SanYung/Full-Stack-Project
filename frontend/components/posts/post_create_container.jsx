import React from 'react';
import { connect } from 'react-redux';
import { createPost, clearPostErrors, clearTextBox} from '../../actions/post_action';
import PostCreate from './post_create'
import {withRouter} from 'react-router-dom'


const msp = (state, ownProps) => {
    return({
    // posterrors: state.errors.post,
    user_id: state.session.currentUser.id,
    channel: state.entities.channels[ownProps.match.params.channelId]
    })}

const mdp = (dispatch) => ({
    createPost: ((post) => dispatch(createPost(post))),

    // clearPostErrors: (() => dispatch(clearPostErrors())),
})

export default withRouter(connect(msp, mdp)(PostCreate))