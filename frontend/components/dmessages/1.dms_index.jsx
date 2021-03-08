import React from 'react';
import DmsIndexItemContainer from './2.dms_index_item_container'
import { Link } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'

class DmsIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    //   App.cable.subscriptions.create(
    //         { channel: "ChatDms" },
    //         {
    //             received: data => {
    //                 this.props.receiveChannel(data.channel);
    //             },
    //             speak: function (data) {
    //                 return this.perform("speak2", data);
    //             }
    //         }
    //     );
        this.props.fetchChannels(this.props.currentUser.id)
        this.props.fetchAllMemberships()
        this.props.fetchUsers()
        // this.props.fetchAllChannels()
    }

    componentDidUpdate(prevProps) {
        // if (prevProps.memberships !== this.props.memberships) {
        //     this.props.fetchChannels(this.props.currentUser.id)
        // }
        // will cause infinite loop
        // if (prevProps.channels !== this.props.channels) {
        //     this.props.fetchChannels(this.props.currentUser.id)
        // }

    }

    render() {
        return (
            <div className="dmsIndex">

                    <div className="title-add">
                        <label id="channelsheader">Direct Messages</label>
                        <button onClick={() => this.props.openModal('createDms')}> <AiOutlinePlus /></button>
                    </div>

                    <ul className="messageList">
                        {this.props.channels.map((channel,i) => (
                            <div key={i}>
                                <DmsIndexItemContainer channel={channel}/>
                            </div>
                        ))}
                    </ul>

            </div>
        )
    }
}


export default DmsIndex