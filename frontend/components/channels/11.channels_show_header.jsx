import React from 'react';
import { Link } from 'react-router-dom'

class ChannelShowHeader extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault();
        this.props.deleteChannel(this.props.channelId)
    }

    render() {
        let channel = this.props.channel
        return (
            <div>
                {channel ? 
                    <li>
                        {channel.title}
                        {channel.description}
                        <button onClick={this.handleClick}>{`delete ${channel.title}`}</button>
                    </li>
                    : null} 
            </div>
        )
    }

}

export default ChannelShowHeader
