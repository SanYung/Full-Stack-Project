import React from 'react';
import { BsPersonSquare } from 'react-icons/bs'
import ChannelPrivateAddUsersItem from './10.channel_private_add_user_item'
import { Link } from 'react-router-dom'

class ChannelPrivateAddUsers extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUsers()
        // this.props.fetchAllChannels()
        // this.props.fetchChannels(this.props.currentUser.id)
    }

    componentDidUpdate(prevProps) {
        // if (prevProps.channel !== this.props.channel) {
        //     this.props.fetchChannels(this.props.currentUser.id)
        // }
        // if (prevProps.channel.title !== this.props.channel.title) {
        //     this.props.fetchChannels(this.props.currentUser.id)
        // }
    }
    handleRender(){
        // console.log (this.props.channel.title)
        if (Object.values(this.props.users).length === this.props.channelMembersCount) {
            return(
                <div className="dms-create-container2">
                    <div><img id="plant-private" src={window.plant} /></div> &nbsp;
                    <p className="alljoined">All users have joined this channel</p>

                </div>
        )} else {
            return(
                <div className="dms-create-container" >
                    
                
                {Object.values(this.props.users).map((user) => (
                    <li key={user.id} >
                        <div >
                            < ChannelPrivateAddUsersItem user={user} currentUser={this.props.currentUser} fetchAllChannels={this.props.fetchAllChannels} fetchChannels={this.props.fetchChannels} currentUser={this.props.currentUser} createMembership={this.props.createMembership} closeModal={this.props.closeModal} channelId={this.props.channelId} channel={this.props.channel} updateChannel={this.props.updateChannel} channelPplNameList={this.props.channelPplNameList} />
                        </div>
                    </li>
                ))} </div>
             )}
    }

    render() {


        return (
            <div >
                {this.handleRender()}
            </div>
    
        )
    }
}

export default ChannelPrivateAddUsers