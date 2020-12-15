import React from 'react';
import ChannelIndexItem from './5.channel_index_item';
import { Link } from 'react-router-dom'

class ChannelIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchChannels(this.props.userId)
    }


    render() {
        return (
            <div>
                <label id="channelsheader">Channels</label> 
                <button onClick={() => this.props.openModal('createChannel')}>Add Channel</button>
                <ul>
                    {this.props.channels.map((channel) => (
                        <div key={channel.id}>
                            {this.props.userId === channel.user_id ? (
                                <ChannelIndexItem
                                    channel={channel} fetchChannel={this.props.fetchChannel}/> ) : (<ChannelIndexItem />)}
                        </div>
                    ))}
                </ul>
            </div>
        )
    }

}


export default ChannelIndex

