import React from 'react';
import {Link} from 'react-router-dom'


class ChannelIndexItem extends React.Component {
    constructor(props){
        super(props)
        if (this.props.channel === undefined) {
            this.state = {
                title: '',
                description: '',
                user_id: 1095454109
            }
        } else { 
            this.state = this.props.channel
        }
    }


    render(){
        return(
            <div>
                <Link to={`/home/channels/${this.state.id}`}>{this.state.title}</Link> 
            </div>
        )
    }
}


export default ChannelIndexItem