import React from 'react';
import ChannelIndexContainer from '../channels/channels_index_container'

class ChannelsMain extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div >
                <button className="logoutbutton" onClick={this.props.deleteSession}>Log Out</button>
                <p>this is my channels component</p>
                <ChannelIndexContainer />
            </div>
        )
    }

}

export default ChannelsMain