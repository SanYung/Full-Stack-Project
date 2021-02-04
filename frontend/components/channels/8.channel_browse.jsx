import React from 'react';
import { Link } from 'react-router-dom'
class ChannelBrowse extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (!this.props.channelAddSelector){
            return null
        }

        if (this.props.channelAddSelector.length === 0){
            return (
            <div>
                You are currently a member of all channels
            </div>
        )}
        
        return (
            <div >  
                {this.props.channelAddSelector.map((channel , i ) => (
                    <li key={i} >
                        <div onClick={this.props.closeModal}>
                            <Link to={`/home/channels/${channel.id}`}>{channel.title}</Link>
                            </div>
                    </li>
                ))}
                
            </div>

        )
    }
}

export default ChannelBrowse
