import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { HiOutlineHashtag } from 'react-icons/hi'
import { AiOutlineStar } from 'react-icons/ai'
import { BsFillPeopleFill } from 'react-icons/bs'
import { HiOutlinePencilAlt } from 'react-icons/hi'
import { RiSettings5Fill } from 'react-icons/ri'

class ChannelShowHeader extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)

        this.state = { dropdown: false }
        this.changeGearOption = this.changeGearOption.bind(this)
    }
    
    componentDidUpdate(prevProps){
        if (prevProps.memberships !== this.props.memberships) {
            this.props.fetchChannels(this.props.currentUser.id)
        }
        if (prevProps.count !== this.props.count) {
            this.props.fetchMemberships()
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
        if (this.state.dropdown) {
            dropdown = <div className="dropdown-col" ><div className="gear-dropdown-items" onClick={this.handleClick}>Leave < HiOutlineHashtag /> {channel.title} </div> 
                <div className="gear-dropdown-items" > <button onClick={() => this.props.openModal('edittitle')}> Edit Channel Name</button></div></div>
        };
        return (
            <div className="showheader" >
                {channel ? 
                    <ul id='showheader-content'>
                        <div id="header-and-icons">
                            <div id="header-channel-title" >< HiOutlineHashtag /> {channel.title} &nbsp; <AiOutlineStar /></div>
                            <div className="icons"> 
                                <li id="person" onClick={() => this.props.openModal('peoplelist')} channelid={channel.id}><BsFillPeopleFill />&nbsp;{this.props.count} people in this channel </li>&nbsp; |&nbsp;
                                {channel.description === "" ? 
                                    <button onClick={() => this.props.openModal('editdescription')}> <div id="pencil"><HiOutlinePencilAlt /> &nbsp;Add a Description </div> </button>
                                    : <button onClick={() => this.props.openModal('editdescription')}> <div id="pencil"><HiOutlinePencilAlt /> &nbsp;{channel.description}</div> </button> }

                            </div>
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
                    </ul>
                    : null} 
            </div>
        )
    }

}

export default ChannelShowHeader
