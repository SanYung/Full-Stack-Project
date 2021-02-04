import React from 'react';
import {Route} from 'react-router-dom'
import Searchbarcontainer from '../searchbar/searchbar_container'
import ChannelIndexContainer from './2.channels_index_container'
import ChannelShowContainer from './4.channels_show_container'
import DmsIndexContainer from '../dmessages/1.dms_index_container'
import PeopleListContainer from './9.channel_members_container'

import Modal from '../modal/modal'

class ChannelHome extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="main-board">
                <Searchbarcontainer />
                <div className="main-not-top-nav" >
                    <div className="channelIndex">
                        <ChannelIndexContainer  />
                        <DmsIndexContainer />
                    </div>
                
                    <div className="main-workspace"> 
                        <Route exact path="/home/channels" component={Modal} /> 
                        <Route exact path="/home/channels/:channelId" component={ChannelShowContainer} />
                    </div>

                    <div className="main-sidedetail">
                        <Route exact path="/home/channels/:channelId/details" component={PeopleListContainer} />
                    </div>

                </div>
            </div>
        )
    }

}

export default ChannelHome


    // < Modal >
    //         <Link to="/home/channels" className="header-link"></Link>
    //         <ChannelCreateContainer />
    //         <ChannelEditDescription />
    //     </Modal >
