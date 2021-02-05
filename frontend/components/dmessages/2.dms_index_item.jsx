import React from 'react';
import { Link } from 'react-router-dom'
import { BsPersonSquare } from 'react-icons/bs'


class DmsIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // this.props.fetchAllChannels()
        // this.props.fetchChannels(this.props.currentUser.id)
        // this.props.fetchUsers()
        // this.props.fetchMemberships()
    }

    render() {
        if (!this.props.channel) {
            return null
        }
        if (this.props.channel.is_dm === false ) {
            return null
        }
        
        return (
            <div id="individualchannel">
                <Link to={`/home/channels/${this.props.channel.id}`}><BsPersonSquare />&nbsp; {this.props.dmsTitle}</Link> 
            </div>
        )
    }
}


export default DmsIndexItem