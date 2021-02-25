import React from 'react';
import { GrChannel } from 'react-icons/gr'
import { GrNewWindow } from 'react-icons/gr'
import { AiOutlineMessage} from 'react-icons/ai'
import { BiLogOutCircle } from 'react-icons/bi'


class ChannelIndexHeaderModal extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="dropdown-items">
                <li onClick={() => this.props.openModal('createChannel')}><GrNewWindow />&nbsp;Create A Channel</li>
                <li onClick={() => this.props.openModal('addChannels')}><GrChannel />&nbsp;Browse Channels</li>
                <li onClick={() => this.props.openModal('createDms')}><AiOutlineMessage />&nbsp;Direct Message</li>
                <li onClick={this.props.deleteSession}><BiLogOutCircle />&nbsp;Sign Out</li>
            </div>
        )
    }
}

export default ChannelIndexHeaderModal