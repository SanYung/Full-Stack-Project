import React from 'react';
import { Link } from 'react-router-dom'
import { BsPersonSquare } from 'react-icons/bs'
import { RiCloseLine } from 'react-icons/ri'
import ChannelMembersItem from './9.channel_members_item'


class ChannelMembers extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.fetchChannels(this.props.currentUser.id)
        this.props.fetchUsers()
        this.props.fetchAllChannels()
        this.props.fetchAllMemberships()
    }



    render() {  
        if(!this.props.users) {
            return null
        }       
        return (
            <div className="members-list">
                <div className="members-list-content">
                <Link to={`/home/channels/${this.props.match.params.channelId}`}> < RiCloseLine /> </Link>
                <div className="members-content-stuff">

                    <div className="list-title"> Member List</div>
                    <div className="list-subtitle">Click a member to message</div>

                        <span id="members-list-align">

                            {this.props.list.map((memberId, i) => (
                                <li key={i} >
                                    < ChannelMembersItem 
                                        memberId={memberId}
                                        alreadyExistingDmessages={this.props.alreadyExistingDmessages}
                                        allDms={this.props.allDms}
                                        createChannel={this.props.createChannel}
                                        users={this.props.users}
                                        createMembership={this.props.createMembership}
                                        currentUser={this.props.currentUser}
                                        lastItemChannelId={this.props.lastItemChannelId}
                                        />
                                    {/* <div className="align-center-members" onClick={this.handleClick}>
                                        <span style={{fontSize: "30px"}}> <BsPersonSquare /></span> &nbsp;&nbsp;
                                        {this.props.users[memberId].username}
                                        <Link to={`/home/channels}`}>{this.props.users[memberId].username}</Link>
                                    </div> */}
                                </li>
                            ))}
                        </span>
                </div>

                </div>
            </div>

        )
    }
}

export default ChannelMembers
