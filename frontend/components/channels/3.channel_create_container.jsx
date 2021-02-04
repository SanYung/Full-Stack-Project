import React from 'react';
import { connect } from 'react-redux';
import { createChannel, clearChannelErrors} from '../../actions/channel_action';
import ChannelCreate from './3.channel_create_form';
import { closeModal } from '../../actions/modal_actions'


const msp = ( state ) => ({
    channelerrors: state.errors.channel,
})

const mdp = (dispatch) => ({
    createChannel: ((channel) => dispatch(createChannel(channel))),
    clearChannelErrors:(() => dispatch(clearChannelErrors())),
    closeModal: () => dispatch(closeModal())
})

export default connect(msp, mdp)(ChannelCreate)