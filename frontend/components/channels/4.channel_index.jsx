import React from 'react';
import ChannelIndexItem from './5.channel_index_item';
import { Link } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsChevronCompactDown } from 'react-icons/bs'
import { IoIosRadioButtonOn } from 'react-icons/io'
import { AiOutlinePlusSquare } from 'react-icons/ai'

class ChannelIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = { dropdown: false }
        this.changeDropDown = this.changeDropDown.bind(this)
    }

    componentDidMount() {
        this.props.fetchUsers()
        this.props.fetchChannels(this.props.currentUser.id)
        this.props.fetchAllChannels()
        this.props.fetchMemberships()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentUser.id !== this.props.currentUser.id) {
            this.props.fetchChannels(this.props.currentUser.id)
            this.props.fetchUsers() 
        }
        if (prevProps.memberships !== this.props.memberships) {
            this.props.fetchChannels(this.props.currentUser.id)
        }

    }

    changeDropDown() {
        this.setState({ dropdown: !this.state.dropdown })
    }

    render() {
        let dropdown;
        if (this.state.dropdown) {
            dropdown = <div className="dropdown-items" onClick={this.props.deleteSession}>Log Out</div>
        }

        return (
            <div className="channelIndex">

                <div className="channelindex-content">

                    <div className="workspace-header">
                        <div id="parentdropdown">
                            <div className="dropdown">
                                <span id="dropdown-click" onClick={this.changeDropDown}> Your Workspace &nbsp; <div id="carrat-down"><BsChevronCompactDown /></div> </span>
                                <div className="dropdown-content">
                                    {dropdown}
                                </div>
                                <div id="user-status"><span id="status-button"> <IoIosRadioButtonOn /></span>&nbsp; {this.props.user.username} &nbsp; </div>
                            </div>
                        </div>
                    </div>

                    <div className="title-add">
                        <label id="channelsheader">Channels</label>
                        <button onClick={() => this.props.openModal('createChannel')}> <AiOutlinePlus /></button>
                    </div>


                    <ul className="channelList">
                        {this.props.channels.map((channel) => (
                            <div key={channel.id}>
                                <ChannelIndexItem channel={channel} />
                            </div>
                        ))}
                        <button onClick={() => this.props.openModal('addChannels')}>
                            < AiOutlinePlusSquare /> <p> Browse channels </p>
                        </button>
                    </ul>

                    <ul className="messageList">
                        <div className="title-add">
                            <label id="channelsheader">Direct Messages</label>
                            <AiOutlinePlus />
                        </div>
                    </ul>

                </div>

            </div>
        )
    }
}


export default ChannelIndex