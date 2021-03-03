import React from 'react';
import { HiOutlineHashtag } from 'react-icons/hi'
import { FiStar } from 'react-icons/fi'
import { BsFillStarFill } from 'react-icons/bs'
import { BsFillPeopleFill } from 'react-icons/bs'
import { HiOutlinePencilAlt } from 'react-icons/hi'
import { RiSettings5Fill } from 'react-icons/ri'
import { RiLockLine } from 'react-icons/ri'
import { IoMdPersonAdd } from 'react-icons/io'


class ChannelShowHeader extends React.Component {
    constructor(props) {
        super(props)
        this.handleDetails = this.handleDetails.bind(this)
        this.handleStar = this.handleStar.bind(this)
    }

    componentDidMount(){
        this.props.fetchMemberships()
    }
    
    componentDidUpdate(prevProps){
        // if (prevProps.channel !== this.props.channel) {
        //     this.props.fetchChannels(this.props.currentUser.id)
        // }
        // if (prevProps.memberships !== this.props.memberships) {
        //     this.props.fetchChannels(this.props.currentUser.id)
        // }
        if (prevProps.count !== this.props.count) {
            this.props.fetchMemberships()
        }
    }

    handleDetails(){
        if (this.props.match.url){
            const newUrl = this.props.match.url + "/details"
            this.props.history.push(newUrl);
        }
    }



    handleStar(e){
        e.preventDefault();
        if (this.props.channel.is_starred === false) {
        this.props.updateChannel({...this.props.channel, is_starred: true})
        } else {
            this.props.updateChannel({ ...this.props.channel, is_starred: false })
        }
    }

    

    render() {
        let channel = this.props.channel;
        if (!channel){
            return null
        }
        return (
            <div className="showheader">
                { channel.is_dm === false ? 
                    <ul id='showheader-content'>
                        <div id="header-and-icons">
                            <div id="header-channel-title" >{channel.is_private === true ? <RiLockLine /> : < HiOutlineHashtag /> } {channel.title} &nbsp; <span id='starr'onClick={this.handleStar}> {this.props.channel.is_starred === true ? <span style={{ color: "gold" }}><BsFillStarFill /></span> : <FiStar />}</span></div>
                            <div className="icons"> 
                                <li id="person" onClick={this.handleDetails} channelid={channel.id}><BsFillPeopleFill />&nbsp;{this.props.count} people in this channel </li>&nbsp; |&nbsp;
                                {channel.description === "" || null ? 
                                    <button onClick={() => this.props.openModal('editdescription')}> <div id="pencil"><HiOutlinePencilAlt /> &nbsp;Add a Description </div> </button>
                                    : <button onClick={() => this.props.openModal('editdescription')}> <div id="pencil"><HiOutlinePencilAlt /> &nbsp;{channel.description}</div> </button> }
                            </div>
                        </div>

                        <div className="private-gear-add">
                            {channel.is_private ? 
                            <div className= "private-gear-add2">
                                <div onClick={() => this.props.openModal('addToPrivateChannel')}> <span id="add-button">< IoMdPersonAdd /> </span> </div>
                                <div  onClick={() => this.props.openModal('gear')} > <span id="gear-button"><RiSettings5Fill /></span> </div>
                            </div>
                             : 
                            <div>
                                <div  onClick={() => this.props.openModal('gear')} > <span id="gear-button"><RiSettings5Fill /></span> </div>
                            </div>}
                        </div>
                    </ul>
                    : 
                    <ul id='showheader-content'>
                        <div id="header-and-icons">
                            <div id="header-channel-title" > {this.props.dmsTitlex}</div>
                            <div className="icons">
                                <li id="person" onClick={this.handleDetails} channelid={channel.id}><BsFillPeopleFill />&nbsp;{this.props.count} people in this chat </li>&nbsp;
                            </div>
                        </div>
                    </ul>} 
            </div>
        )
    }

}

export default ChannelShowHeader
