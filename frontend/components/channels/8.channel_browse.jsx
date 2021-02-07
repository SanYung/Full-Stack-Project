import React from 'react';
import { Link } from 'react-router-dom'
import ChannelJoinButton from './8.channel_browse_join_button'
import { HiOutlineHashtag } from 'react-icons/hi'

class ChannelBrowse extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (!this.props.channelAddSelector){
            return null
        }

        if (!this.props.channelMembersCount2) {
            return null
        }

        if (this.props.channelAddSelector.length === 0){
            return (
            <div className="channel-browse-container">
                You are currently a member of all public channels
            </div>
        )}
        
        return (
            <div className="channel-browse-container">  
                {this.props.channelAddSelector.map((channel , i ) => (
                    <li key={i} >
                        <div id="individ-channel" onClick={this.props.closeModal}>
                            <div className="channel-members"> <Link to={`/home/channels/${channel.id}`}>< HiOutlineHashtag /> {channel.title}</Link> 
                                <span style={{color: 'grey'}} > {this.props.channelMembersCount2[channel.id].length} members</span>
                            </div>
                            <div>< ChannelJoinButton channel={channel} currentUser={this.props.currentUser} createMembership={this.props.createMembership}/></div>
                        </div>
                    </li>
                ))}
                
            </div>

        )
    }
}

export default ChannelBrowse
