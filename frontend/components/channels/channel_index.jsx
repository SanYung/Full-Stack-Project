import React from 'react';
import { GiParkBench } from 'react-icons/gi';
import ChannelItem from './channel_item';

class ChannelIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchChannels(this.props.id)
    }

  


    render() {
        return (
            <div>
                <ul>
                    {this.props.channels.map((channel, i) => (
                        <div key={i}>
                            {this.props.id === channel.user_id ? (
                                <ChannelItem
                                    channel={channel} /> ) : ( <ChannelItem />)}
                        </div>
                    ))}
                </ul>
            </div>
        )
    }

}


export default ChannelIndex
