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
        this.handleDetails = this.handleDetails.bind(this)
        this.handleStar = this.handleStar.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.state = { dropdown: false }
        this.changeGearOption = this.changeGearOption.bind(this)
    }

    componentDidMount(){
        this.props.fetchMemberships()
    }
    
    componentDidUpdate(prevProps){
        if (prevProps.memberships !== this.props.memberships) {
            this.props.fetchChannels(this.props.currentUser.id)
        }
        if (prevProps.count !== this.props.count) {
            this.props.fetchMemberships()
        }

        // if (prevProps.channel !== this.props.channel) {
        //     this.props.fetchChannels(this.props.currentUser.id)
        // }
    }

    handleDetails(){
        if (this.props.match.url){
            const newUrl = this.props.match.url + "/details"
            this.props.history.push(newUrl);
        }
    }

    handleDelete(e){
        e.preventDefault();
        this.props.deleteChannel(this.props.channelId)
        .then(window.location.reload());
    }

    handleStar(e){
        e.preventDefault();
        if (this.props.channel.is_starred === false) {
        this.props.updateChannel({...this.props.channel, is_starred: true})
        } else {
            this.props.updateChannel({ ...this.props.channel, is_starred: false })
        }
    }

    handleClick(e) {
        e.preventDefault();
        this.props.deleteMembership(this.props.channelId, this.props.currentUser.id)
        .then(window.location.reload());
    }


    changeGearOption(e) {
        e.preventDefault();
        this.setState({ dropdown: !this.state.dropdown })
    }

    render() {
        let channel = this.props.channel;
        if (!channel){
            return null
        }
        let dropdown;
        if (this.state.dropdown && channel.is_private === false) {
            dropdown = <div className="dropdown-col" ><div className="gear-dropdown-items" onClick={this.handleClick}>Leave < HiOutlineHashtag /> {channel.title} </div> 
                <div className="gear-dropdown-items" > <button onClick={() => this.props.openModal('edittitle')}> Edit Channel Name</button></div></div>
        } else if (this.state.dropdown && channel.is_private === true){
            dropdown = <div className="dropdown-col" ><div className="gear-dropdown-items" onClick={this.handleDelete}> Delete <RiLockLine /> {channel.title} </div>
            <div className="gear-dropdown-items" > <button onClick={() => this.props.openModal('edittitle')}> Edit Channel Name</button></div></div>
        }
        return (
            <div className="showheader" >
                { channel.is_dm === false ? 
                    <ul id='showheader-content'>
                        <div id="header-and-icons">
                            <div id="header-channel-title" >{channel.is_private === true ? <RiLockLine /> : < HiOutlineHashtag /> } {channel.title} &nbsp; <span onClick={this.handleStar}> {this.props.channel.is_starred === true ? <span style={{ color: "gold" }}><BsFillStarFill /></span> : <FiStar />}</span></div>
                            <div className="icons"> 
                                <li id="person" onClick={ this.handleDetails} channelid={channel.id}><BsFillPeopleFill />&nbsp;{this.props.count} people in this channel </li>&nbsp; |&nbsp;
                                {channel.description === "" || null ? 
                                    <button onClick={() => this.props.openModal('editdescription')}> <div id="pencil"><HiOutlinePencilAlt /> &nbsp;Add a Description </div> </button>
                                    : <button onClick={() => this.props.openModal('editdescription')}> <div id="pencil"><HiOutlinePencilAlt /> &nbsp;{channel.description}</div> </button> }
                            </div>
                        </div>

                        <div className="private-gear-add">
                            <div>
                                {channel.is_private ? <span onClick={() => this.props.openModal('addToPrivateChannel')}> <span id="add-button">< IoMdPersonAdd /> </span> </span> : ''}
                            </div>

                            <li> 
                                <div id="parentdropdown">
                                    <div className="dropdown">
                                        <span id="dropdown-click" onClick={this.changeGearOption}> <div id="gear-button"><RiSettings5Fill /></div> </span>
                                        <div className="dropdown-content">
                                            {dropdown}
                                        </div>
                                    </div>
                                </div>
                            </li>

                        </div>
                    </ul>
                    : 
                    <ul id='showheader-content'>
                        <div id="header-and-icons">
                            <div id="header-channel-title" > {this.props.dmsTitlex}</div>
                            <div className="icons">
                                <li id="person" onClick={() => this.props.openModal('peoplelist')} channelid={channel.id}><BsFillPeopleFill />&nbsp;{this.props.count} people in this chat </li>&nbsp;
                            </div>
                        </div>

                        <li>
                            <div id="parentdropdown">
                            </div>

                        </li>
                    </ul> 
                    
                    
                    } 
            </div>
        )
    }

}

export default ChannelShowHeader
