import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { HiOutlineHashtag } from 'react-icons/hi'
import { AiFillStar } from 'react-icons/ai'
import { BsPersonPlusFill } from 'react-icons/bs'
import { AiTwotonePushpin } from 'react-icons/ai'
import { HiOutlinePencilAlt } from 'react-icons/hi'
import { RiSettings5Fill } from 'react-icons/ri'


class ChannelShowHeader extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = { dropdown: false }
        this.changeGearOption = this.changeGearOption.bind(this)
    }

    handleClick(e) {
        e.preventDefault();
        this.props.deleteChannel(this.props.channelId)
        .then(() => (this.props.history.push('/home/channels') ))
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
            dropdown = <div className="gear-dropdown-items"  ><div onClick={this.handleClick}>{`Delete ${channel.title}`} </div> 
                        <button onClick={() => this.props.openModal('edittitle')}> Edit Channel Name</button></div>
        };
        return (
            <div className="showheader" >
                {channel ? 
                    <ul id='showheader-content'>
                        <div id="header-and-icons">
                            <div id="header-channel-title" >< HiOutlineHashtag /> {channel.title}</div>
                            <div className="icons"> 
                                &nbsp; <li id="star"><AiFillStar /></li>&nbsp; |&nbsp;
                                <li id="person"><BsPersonPlusFill /></li>&nbsp; |&nbsp;
                                <li id="pin"><AiTwotonePushpin /> </li>&nbsp;|&nbsp;
                                
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

export default withRouter(ChannelShowHeader)
