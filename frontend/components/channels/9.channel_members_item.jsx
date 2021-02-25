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

    handleClick() {
        let user = this.props.users[this.props.memberId]
        let num = parseInt(this.props.lastItemChannelId + 1)

        if (this.props.alreadyExistingDmessages.includes(user.username)) {
            this.props.allDms.forEach(obj => {
                if (obj.title === user.username) {
                    window.location.href = `#/home/channels/${obj.id}`
                }
            })
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
        return (
            <div className="align-center-members" onClick={this.handleClick} >
                <span style={{ fontSize: "30px" }}> <BsPersonSquare /></span> &nbsp;&nbsp;
                {username}
            </div>
        )
    }
}

export default ChannelMembersItem
