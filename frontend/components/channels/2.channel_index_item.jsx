import React from 'react';
import {Link} from 'react-router-dom'
import { HiOutlineHashtag } from 'react-icons/hi'
import { RiLockLine } from 'react-icons/ri'

class ChannelIndexItem extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        if (!this.props.channel) {
            return null
        }
        if (this.props.channel.is_dm === true) {
            return null
        }

        return(
            <div id="individualchannel">
                {this.props.channel.is_private === true ? <Link to={`/home/channels/${this.props.channel.id}`}><RiLockLine />&nbsp; {this.props.channel.title}</Link>  :
                    <Link to={`/home/channels/${this.props.channel.id}`}><HiOutlineHashtag />&nbsp; {this.props.channel.title}</Link> 
                }
            </div>
        )
    }
}


export default ChannelIndexItem