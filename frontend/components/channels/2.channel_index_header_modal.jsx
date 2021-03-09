import React from 'react';
import { GrChannel } from 'react-icons/gr'
import { GrNewWindow } from 'react-icons/gr'
import { AiOutlineMessage} from 'react-icons/ai'
import { BiLogOutCircle } from 'react-icons/bi'
import { HiOutlinePhotograph } from 'react-icons/hi'



class ChannelIndexHeaderModal extends React.Component {
    constructor(props) {
        super(props)
        this.handleLogout = this.handleLogout.bind(this);

    }

    handleLogout(e) {
        const user = {
            username: this.props.currentUser.username,
            email: this.props.currentUser.email,
            id: this.props.currentUser.id,
            online: false,
        };
        e.preventDefault();
        this.props.updateCurrentUser(user)
            // .then((res) => {
            //     if (App.cable.subscriptions.subscriptions[1]) {
            //         App.cable.subscriptions.subscriptions[1].speak({
            //             user: user,
            //         });
            //     }

            //     return res;
            // })
            // .then(() => {
            //     App.cable.subscriptions.subscriptions = [];
            // });

            .then((res) => this.props.deleteSession(res))
    }

    
    render() {
        return (
            <div className="dropdown-items">
                <li onClick={() => this.props.openModal('addphoto')}><HiOutlinePhotograph />&nbsp;Add A Profile Picture</li>
                <li onClick={() => this.props.openModal('createChannel')}><GrNewWindow />&nbsp;Create A Channel</li>
                <li onClick={() => this.props.openModal('addChannels')}><GrChannel />&nbsp;Browse Channels</li>
                <li onClick={() => this.props.openModal('createDms')}><AiOutlineMessage />&nbsp;Direct Message</li>
                <li onClick={this.handleLogout}><BiLogOutCircle />&nbsp;Sign Out</li>
            </div>
        )
    }
}

export default ChannelIndexHeaderModal