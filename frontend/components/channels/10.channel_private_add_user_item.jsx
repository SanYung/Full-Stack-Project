import React from 'react';
import { BsPersonSquare } from 'react-icons/bs'
import { withRouter, Redirect } from 'react-router-dom'

class ChannelPrivateAddUsersItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = this.props.channel
    }

    handleClick(e) {
        this.props.createMembership(this.props.channelId, this.props.user.id)
            // .then(() => {this.setState({ ['title']: this.props.channelPplNameList})
            .then(() => this.props.updateChannel({ ...this.props.channel, 'title': this.props.channelPplNameList }))
    }

    render() {
        if (this.props.user.username === this.props.currentUser.username || this.props.channelPplNameList.includes(this.props.user.username)) {
             return null
         }
        return (
            <div onClick={() => this.props.closeModal()}>
                <div id="individ-dms" onClick={this.handleClick}> <span id="demo-profile-dms"> <BsPersonSquare /> </span> {this.props.user.username} </div>

            </div>
        )
    }
}

export default withRouter(ChannelPrivateAddUsersItem)