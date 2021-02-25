import React from 'react';
import ChannelIndexItem from './2.channel_index_item';
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlinePlusSquare } from 'react-icons/ai'

class ChannelIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchChannels(this.props.currentUser.id)
        this.props.fetchUsers()
        this.props.fetchAllChannels()
        this.props.fetchAllMemberships()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.memberships !== this.props.memberships) {
            this.props.fetchChannels(this.props.currentUser.id)
        }
    }

    render() {

        return (
            <div >
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
                        <div className="browse-channels"> < AiOutlinePlusSquare /> Browse channels</div>
                    </button>
                </ul>
            </div>
        )
    }
}


export default ChannelIndex