import React from 'react';
import {Route} from 'react-router-dom'
import Searchbarcontainer from '../searchbar/searchbar_container'
import ChannelIndexContainer from './3.channels_index_container'
import ChannelShowContainer from './9.channels_show_container'
import DmsIndexContainer from '../dmss/1.dms_index_container'
// import DmsShowContainer from '../dmss/3.dms_show_container'
import Modal from '../modal/modal'

class ChannelHome extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div >
                <Searchbarcontainer />
                <div className="channelIndex">
                <ChannelIndexContainer  />
                <DmsIndexContainer />
                </div>
                
                {/* <ChannelIndexContainer channelId={this.props.channelId}/> */}
                <Route exact path="/home/channels" component={Modal} /> 
                <Route exact path="/home/channels/:channelId" component={ChannelShowContainer}/>
                {/* <Route exact path="/home/channels/:dmsId" component={DmsShowContainer} />         */}

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
