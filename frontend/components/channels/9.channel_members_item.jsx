import React from 'react';
import { BsPersonSquare } from 'react-icons/bs'

class ChannelMembersItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        let username = this.props.users[this.props.memberId] ? this.props.users[this.props.memberId].username : ''
        this.state = {
            title: username,
            description: '',
            is_dm: true,
            is_private: true,
            is_starred: false
        }
    }

    alreadyExistingDmessages(otherUser){

        let memberships = Object.values(this.props.memberships)
        let users = this.props.users
        let currentUser = this.props.currentUser.username
        let allchannels = this.props.allchannels
        let hash = {}
        let arr = []
        memberships.forEach((obj) => {
            hash[obj.channelId] = []
        })

        memberships.forEach((obj) => {
            hash[obj.channelId].push(users[obj.memberId].username)
        })

        Object.keys(hash).forEach(key => {
            
            if (allchannels[key].is_dm && hash[key].length === 2 && hash[key][0] === currentUser && hash[key][1] === otherUser) {
                arr.push(key)
                arr.push('true')
            }
            else if (allchannels[key].is_dm && hash[key].length === 2 && hash[key][1] === currentUser && hash[key][0] === otherUser){
                arr.push(key)
                arr.push('true')
            }
            else if (allchannels[key].is_dm && hash[key].length === 1 && hash[key][0] === otherUser) {
                arr.push(key)
                arr.push('true')
            }
        })
        console.log(arr)
        return arr

    }


    handleClick() {
        let user = this.props.users[this.props.memberId]
        let num = parseInt(this.props.lastItemChannelId + 1)

        if (this.alreadyExistingDmessages(user.username)[1] === 'true') {
            window.location.href = `#/home/channels/${this.alreadyExistingDmessages(user.username)[0]}`
        } else if (this.props.users[this.props.memberId].username === this.props.currentUser.username) {
            this.setState({title: this.props.currentUser.username})
            this.props.createChannel(this.state)
            .then(() => window.location.href = `#/home/channels/${num}`)
        }
        else if(this.props.users[this.props.memberId].username !== this.props.currentUser.username) {
            this.props.createChannel(this.state)
            .then((result) => (this.props.createMembership(Object.values(result)[1].id, user.id)))
            .then(() => window.location.href = `#/home/channels/${num}`)
        }
    }


    render() {
        let username = this.props.users[this.props.memberId] ? this.props.users[this.props.memberId].username : ''
        let user = this.props.users[this.props.memberId] ? this.props.users[this.props.memberId] : ''
        return (
            <div className="align-center-members" onClick={this.handleClick} >

                {user.photoUrl ? <img id="demoprofile" src={user.photoUrl} />
                    : <img id="demoprofile" src={this.props.photo1} />}
                {/* <span style={{ fontSize: "30px" }}> <BsPersonSquare /></span> &nbsp;&nbsp; */}
                {username}
            </div>
        )
    }
}

export default ChannelMembersItem
