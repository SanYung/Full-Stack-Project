import React from 'react';
import {Link} from 'react-router-dom'
import { HiOutlineHashtag } from 'react-icons/hi'


class ChannelIndexItem extends React.Component {
    constructor(props){
        super(props)

    }


    render(){
        if (!this.props.channel) {
            return null
        }
        return(
            <div id="individualchannel">
                <Link to={`/home/channels/${this.props.channel.id}`}><HiOutlineHashtag />&nbsp; {this.props.channel.title}</Link> 
            </div>
        )
    }
}


export default ChannelIndexItem