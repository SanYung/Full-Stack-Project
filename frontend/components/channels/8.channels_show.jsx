import React from 'react';
import { Link } from 'react-router-dom'
import ChannelShowHeader from './11.channels_show_header'

class ChannelShow extends React.Component {
    componentDidMount(){
        this.props.fetchChannel(this.props.channelId)
    }

    render() {
        return (
            <div>
                < ChannelShowHeader channelId={this.props.channelId} deleteChannel={this.props.deleteChannel} channel={this.props.channel} fetchChannel={this.props.fetchChannel}/>
            </div>
        )
    }

}

export default ChannelShow
