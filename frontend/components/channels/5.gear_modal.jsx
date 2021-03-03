import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { HiOutlineHashtag } from 'react-icons/hi'
import { FiStar } from 'react-icons/fi'
import { BsFillStarFill } from 'react-icons/bs'
import { BsFillPeopleFill } from 'react-icons/bs'
import { HiOutlinePencilAlt } from 'react-icons/hi'
import { RiSettings5Fill } from 'react-icons/ri'
import { RiLockLine } from 'react-icons/ri'
import { IoMdPersonAdd } from 'react-icons/io'
import { PeopleListContainer } from './9.channel_members_container'

class ChannelShowHeader extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    // componentDidMount() {
    //     this.props.fetchMemberships()
    // }

    componentDidUpdate(prevProps) {
        // if (prevProps.memberships !== this.props.memberships) {
        //     this.props.fetchChannels(this.props.currentUser.id)
        // }
    
        // if (prevProps.channel !== this.props.channel) {
        //     this.props.fetchChannels(this.props.currentUser.id)
        // }
    }

    handleDelete(e){
        e.preventDefault();
        this.props.deleteChannel(this.props.channelId)
        .then(window.location.reload());
    }

    handleClick(e) {
        e.preventDefault();
        this.props.deleteMembership(this.props.channelId, this.props.currentUser.id)
        .then(window.location.reload());
    }

    render() {
        let channel = this.props.channel;
        if (!channel) {
            return null
        }
      
        return (
            <div >
                {channel.is_private === false ?
                <div className="dropdown-items2"> 
                    <li onClick={this.handleClick}> Leave < HiOutlineHashtag /> {channel.title} </li> 
                    <li onClick={() => this.props.openModal('edittitle')}> Edit Channel Name</li> 
                </div> 
                :
                <div className="dropdown-items2" >
                    <li onClick={this.handleDelete}> Delete <RiLockLine /> {channel.title} </li> 
                    <li onClick={() => this.props.openModal('edittitle')}> Edit Channel Name</li> 
                </div> }
            </div>
        )
    }

}

export default ChannelShowHeader
