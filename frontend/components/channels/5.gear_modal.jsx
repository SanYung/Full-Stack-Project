import React from 'react';
import { HiOutlineHashtag } from 'react-icons/hi'
import { RiSettings5Fill } from 'react-icons/ri'
import { RiLockLine } from 'react-icons/ri'


class GearModal extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount() {
        this.props.fetchMemberships()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.memberships !== this.props.memberships) {
            this.props.fetchChannels(this.props.currentUser.id)
        }
        if (prevProps.count !== this.props.count) {
            this.props.fetchMemberships()
        }
    }


    handleDelete(e) {
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
        let dropdown;
        if (channel.is_private === false) {
            dropdown = <div className="dropdown-col" ><div className="gear-dropdown-items" onClick={this.handleClick}>Leave < HiOutlineHashtag /> {channel.title} </div>
                <div className="gear-dropdown-items" > <button onClick={() => this.props.openModal('edittitle')}> Edit Channel Name</button></div></div>
        } else if (this.state.dropdown && channel.is_private === true) {
            dropdown = <div className="dropdown-col" ><div className="gear-dropdown-items" onClick={this.handleDelete}> Delete <RiLockLine /> {channel.title} </div>
                <div className="gear-dropdown-items" > <button onClick={() => this.props.openModal('edittitle')}> Edit Channel Name</button></div></div>
        }
        return (
            <div id="gear-modal-x" onClick={() => this.props.closeModal()}>

            </div>
        )
    }

}

export default GearModal
