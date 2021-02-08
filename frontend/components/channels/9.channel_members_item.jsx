import React from 'react';
import { Link } from 'react-router-dom'
import { BsPersonSquare } from 'react-icons/bs'
import { RiCloseLine } from 'react-icons/ri'


class ChannelMembersItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            title: this.props.users[this.props.memberId].username,
            description: '',
            is_dm: true,
            is_private: true,
            is_starred: false
        }
    }

    handleClick() {
        let user = this.props.users[this.props.memberId]
        if (this.props.alreadyExistingDmessages.includes(user.username)) {
            this.props.allDms.forEach(obj => {
                if (obj.title === user.username) {
                    window.location.href = `#/home/channels/${obj.id}`
                }
            })

        } else {
            this.props.createChannel(this.state)
                .then((result) => (this.props.createMembership(Object.values(result)[1].id, user.id)))
                 window.location.href = `#/home/channels`


        }
    }

    render() {
        return (
            // <div onClick= {() => this.props.closeModal()}>

            <div className="align-center-members" onClick={this.handleClick} >
                <span style={{ fontSize: "30px" }}> <BsPersonSquare /></span> &nbsp;&nbsp;
                {this.props.users[this.props.memberId].username}
                {/* <Link to={`/home/channels}`}>{this.props.users[memberId].username}</Link> */}
            </div>
            // </div>
        )
    }
}

export default ChannelMembersItem
