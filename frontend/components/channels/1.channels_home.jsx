import React from 'react';
import {Route} from 'react-router-dom'
import ChannelIndexContainer from './3.channels_index_container'
import ChannelShowContainer from './9.channels_show_container'

class ChannelHome extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div >
                <ChannelIndexContainer channelId={this.props.channelId}/>
                <Route exact path="/home/channels/:channelId" component={ChannelShowContainer}/> 
            </div>
        )
    }

}

export default ChannelHome