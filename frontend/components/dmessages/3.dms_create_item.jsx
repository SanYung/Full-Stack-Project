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
        // debugger
        // App.cable.subscriptions.subscriptions[0].speak({ channel: this.state });
        let num = parseInt(this.props.lastItemChannelId + 1)
        if (this.props.alreadyExistingDmessages.includes(this.props.user.username)) {
            this.props.allDms.forEach(obj => {
                if (obj.title === this.props.user.username) {
                    window.location.href = `#/home/channels/${obj.id}`
                }
            })
        } else if (this.state.title === this.props.currentUser.username){
            this.props.createChannel(this.state) 
             .then(() => window.location.href = `#/home/channels/${num}`)
        }
        else {
            this.props.createChannel(this.state)
            .then((result) => (this.props.createMembership(Object.values(result)[1].id, this.props.user.id)))
            .then(() => window.location.href = `#/home/channels/${num}`)
        }
    } 

    render() {
        return (
            <div onClick={() => this.props.closeModal()}>
                <div id="individ-dms" onClick={this.handleClick}> <span id="demo-profile-dms"> <BsPersonSquare /> </span> {this.props.user.username} &nbsp;
                { this.props.user.username === this.props.currentUser.username ? <span style={{color: 'darkgray'}}>(you)</span> : ''} 
                </div>

            </div>
        )
    }
}

export default withRouter(DmsCreateItem)