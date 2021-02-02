import React from 'react';
import { Link } from 'react-router-dom'
class ChannelAdd extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        if (!this.props.unjoinedChannels){
            return null
        }
        
        return (
            <div >  
                {this.props.unjoinedChannels.map((channel , i ) => (
                    <li key={i} >
                        <div onClick={this.props.closeModal}>
                            <Link to={`/home/channels/${channel.id}`}>{channel.title}</Link>
                            </div>
                    </li>
                ))}
                
            </div>

        )
    }
}

export default ChannelAdd
