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

    channelId (username) {
        let users = this.props.users
        let currentUser = this.props.currentUser.username
        let hash = {}
        let arr = []
        Object.values(this.props.membersps).forEach((obj) => {
            hash[obj.channelId] = []
        })

        Object.values(this.props.membersps).forEach((obj) => {
            hash[obj.channelId].push(users[obj.memberId].username)
        })

        Object.keys(hash).forEach(key => {
            if (this.props.allchannels[key].is_dm && hash[key].includes(username) && hash[key].includes(currentUser) ) {
                arr.push(key)
            }
        })
        return arr[0]
        
    }


    handleClick() {
        // debugger
        // App.cable.subscriptions.subscriptions[0].speak({ channel: this.state });
        let num = parseInt(this.props.lastItemChannelId + 1)
        if (this.props.memberships.includes(this.props.user.username)) {
            window.location.href = `#/home/channels/${this.channelId(this.props.user.username)}`
        } 
        else if (!this.props.memberships.includes(this.props.currentUser.username ) && this.state.title === this.props.currentUser.username){
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
                <div id="individ-dms" onClick={this.handleClick}> 
                    {this.props.user.photoUrl ? <img id="demoprofile" src={this.props.user.photoUrl} />
                        : <img id="demoprofile" src={window.profileURL2} />}
                
                {this.props.user.username} &nbsp;
                { this.props.user.username === this.props.currentUser.username ? <span style={{color: 'darkgray'}}>(you)</span> : ''} 
                </div>

            </div>
        )
    }
}

export default withRouter(DmsCreateItem)