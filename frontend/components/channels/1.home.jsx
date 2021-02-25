import React from 'react';
import {Route} from 'react-router-dom'
import SearchbarView from '../searchbar/searchbar_container'
import ChannelIndexContainer from './2.channels_index_container'
import ChannelShowContainer from './4.channels_show_container'
import DmsIndexContainer from '../dmessages/1.dms_index_container'
import PeopleListContainer from './9.channel_members_container'
import ChannelIndexHeaderContainer from './2.channel_index_header_container'
import Modal from '../modal/modal'

class ChannelHome extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="main-board">
                <SearchbarView />
                <div className="board-info" >
                    <div className="nav">
                        <ChannelIndexHeaderContainer />
                        <div className="channelIndex">
                            <ChannelIndexContainer  />
                            <DmsIndexContainer />
                        </div>
                    </div>

                    <div className="main-content">
                        <div > <Route exact path="/home/channels" component={Modal} />  </div>
                        <div className="flex">
                        <Route path="/home/channels/:channelId" component={ChannelShowContainer} />
                        {/* {this.props.details === 'true'? 
                                <div className="flex">
                                    <Route path="/home/channels/:channelId" component={ChannelShowContainer}  />
                                    < PeopleListContainer/>
                                </div>
                            : 
                                <div className="flex">
                                    <Route path="/home/channels/:channelId" component={ChannelShowContainer} />
                                </div>
                        } */}
                        {/* // < PeopleListContainer /> : ''} */}
                        <Route exact path="/home/channels/:channelId/details" component={PeopleListContainer} />
                        </div> 
                    </div>
                </div>
            </div>
        )
    }

}

export default ChannelHome
