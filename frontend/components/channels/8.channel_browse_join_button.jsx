import React from 'react';
import { Link } from 'react-router-dom'
class ChannelJoinButton extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick(e) {
        e.preventDefault();
        this.props.createMembership(this.props.channel.id, this.props.currentUser.id)
            window.location.href = `#/home/channels/${this.props.channel.id}`
    }

    render() {

        return (
            <div>
                <button id="join-button-modal" onClick={this.handleClick}>Join</button>
            </div>

        )
    }
}

export default ChannelJoinButton
