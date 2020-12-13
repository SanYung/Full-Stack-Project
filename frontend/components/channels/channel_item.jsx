import React from 'react';
import {Link} from 'react-router-dom'


class ChannelItem extends React.Component {
    constructor(props){
        super(props)

        if (this.props.channel === undefined) {
            this.state = {
                title: "",
                user_id: 1094109
            }
        } else { 
            this.state = this.props.channel
        }

    }

    render(){
        return(
            <div>
                    {this.state.title}   
            </div>
        )
    }
}


export default ChannelItem