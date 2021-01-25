import React from 'react';
import ChannelIndexItem from './5.channel_index_item';
import { Link } from 'react-router-dom'
import { RiAddCircleLine } from 'react-icons/ri'
import { BsChevronCompactDown} from 'react-icons/bs'
import { IoIosRadioButtonOn } from 'react-icons/io'

class ChannelIndex extends React.Component {
    constructor(props){
        super(props)
        this.state = {dropdown:false}
        this.changeDropDown = this.changeDropDown.bind(this)
    }

    componentDidMount(){
        this.props.fetchUserChannels(this.props.userId)
    
        
    }

    changeDropDown(){
        this.setState({dropdown: !this.state.dropdown})
    }

    render() {
        let dropdown;
        if (this.state.dropdown){
            dropdown = <div className="dropdown-items" onClick={this.props.deleteSession}>Log Out</div>
        } 

        return ( 
            <div className="channelIndex">

                <div className="channelindex-content">

                
                    <div id="parentdropdown">
                        <div className="dropdown">
                            <span id="dropdown-click" onClick={this.changeDropDown}> <div id="status-button"><IoIosRadioButtonOn />&nbsp; </div>  {this.props.user.username} &nbsp; <div id="carrat-down"><BsChevronCompactDown /></div> </span>
                            <div className="dropdown-content">
                                {dropdown}
                            </div>
                        </div>
                    </div>

                    <div className="title-add">
                        <label id="channelsheader">Channels</label> 
                        <button onClick={() => this.props.openModal('createChannel')}> <RiAddCircleLine /></button>
                    </div>


                    <ul className="channelList">
                        {this.props.channels.map((channel) => (
                            <div key={channel.id}>
                                {/* {this.props.userId === channel.user_id ? ( */}
                                    <ChannelIndexItem
                                        channel={channel} fetchChannel={this.props.fetchChannel}/> 
                                        {/* ) : (<ChannelIndexItem />)} */}
                            </div>
                        ))}
                    </ul>

                    <ul className="messageList">
                        <div className="title-add">
                            <label id="channelsheader">Direct Messages</label>
                            <RiAddCircleLine />
                        </div>
                    </ul>

                </div>

            </div>
        )
    }
}


export default ChannelIndex

