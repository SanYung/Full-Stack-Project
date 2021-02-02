import React from 'react';
import { Link } from 'react-router-dom'
import ChannelShowHeader from './10.channels_show_header_container'
import Modal from '../modal/modal'
import PostIndexContainer from '../posts/post_index_container'
class ChannelShow extends React.Component {

    render() {
        return (
            <div>
                <ChannelShowHeader channel={this.props.channel} channelId={this.props.channelId} fetchChannel={this.props.fetchChannel}/>
                <PostIndexContainer /> 
                <Modal></Modal>
            </div>
        )
    }

}

export default ChannelShow
