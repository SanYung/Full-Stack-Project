import React from 'react';
import { connect } from 'react-redux';
import { createPost, clearPostErrors } from '../../actions/post_action';
import PostCreate from './post_create'
import {withRouter} from 'react-router-dom'


const msp = (state) => ({
    posterrors: state.errors.post,
    channels: state.entities.channels
})

const mdp = (dispatch) => ({
    createPost: ((post) => dispatch(createPost(post))),
    clearPostErrors: (() => dispatch(clearPostErrors())),
})

export default withRouter(connect(msp, mdp)(PostCreate))