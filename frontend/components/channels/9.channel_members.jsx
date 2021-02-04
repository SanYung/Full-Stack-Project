import React from 'react';
import { Link } from 'react-router-dom'
import { BsPersonSquare } from 'react-icons/bs'
import { RiCloseLine } from 'react-icons/ri'


class ChannelMembers extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.fetchUsers()
    }

    render() {  
        if(!this.props.users) {
            return null
        }       
        return (
            <div >
                <div className="channel-details">
                <Link to={`/home/channels/${this.props.match.params.channelId}`}> < RiCloseLine /> </Link>
                    <div className="details-title"> Member List</div>
                    <div className="details-subtitle">Click a member to message</div>
                        {this.props.list.map((memberId, i) => (
                            <li key={i} >
                                <div onClick={this.props.closeModal}>
                                    <BsPersonSquare />
                                    <Link to={`/home/dm/${this.props.users[memberId]}`}>{this.props.users[memberId].username}</Link>
                                </div>
                            </li>
                        ))}
                </div>
                
            </div>

        )
    }
}

export default ChannelMembers
