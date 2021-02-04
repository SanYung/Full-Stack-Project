import React from 'react';
import { BsPersonSquare } from 'react-icons/bs'
import { withRouter, Redirect } from 'react-router-dom'

class DmsCreateItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)

        this.state = {
            title: this.props.user.username,
            description: '',
            is_dm: true,
            is_private: true,
            is_starred: false
        }
    }


    handleClick() {
        // App.cable.subscriptions.subscriptions[0].speak({ channel: this.state });

            if (this.props.alreadyExistingDmessages.includes(this.props.user.username)) {
                this.props.history.push(`/home/channels/379`)
                // .then(() => this.createMembership(ownProps.match.params.channelId, this.props.user.id)

            } else {
                this.props.createChannel(this.state)
                    .then((result) => this.props.createMembership(Object.values(result)[1].id, this.props.user.id))
                    // this.props.history.push(`/home/channels/${channelId}`)
                }   
    }

    render() {
        return (
            <div onClick={() => this.props.closeModal()}>
                <div onClick={this.handleClick}> <BsPersonSquare /> {this.props.user.username} </div>
            </div>
        )
    }
}

export default withRouter(DmsCreateItem)