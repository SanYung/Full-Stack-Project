import React from 'react';
import { Link } from 'react-router-dom'
import ChannelShowHeader from './11.channels_show_header'
import Modal from '../modal/modal'
import PostIndexContainer from '../posts/post_index_container'
class ChannelShow extends React.Component {
    componentDidMount(){
        this.props.fetchChannel(this.props.channelId)
    }

    render() {
        return (
            <div>
                
                <ChannelShowHeader openModal={this.props.openModal} channelId={this.props.channelId} deleteChannel={this.props.deleteChannel} channel={this.props.channel} fetchChannel={this.props.fetchChannel}/>
                <PostIndexContainer /> 
                <Modal></Modal>
            </div>
        )
    }

}

export default ChannelShow
