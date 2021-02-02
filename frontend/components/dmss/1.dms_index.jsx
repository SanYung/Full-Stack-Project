import React from 'react';
import DmsIndexItem from './1.dms_index_item'
import { Link } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'

class DmsIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUsers()
    }

    render() {
        return (
            <div className="dmsIndex">

                    <div className="title-add">
                        <label id="channelsheader">Direct Messages</label>
                        <button onClick={() => this.props.openModal('createDms')}> <AiOutlinePlus /></button>
                    </div>

                    <ul className="messageList">
                        {/* {this.props.channels.map((channel) => (
                            <div key={channel.id}>
                                <DmsIndexItem channel={channel} />
                            </div>
                        ))} */}
                    </ul>

            </div>
        )
    }
}


export default DmsIndex