import React from 'react';
import { Link } from 'react-router-dom'
import { IoIosRadioButtonOn } from 'react-icons/io'


class DmsIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = { title: this.props.dmsTitle}
    }

    componentDidUpdate(prevProps){
        
        if (prevProps.dmsTitle !== this.props.dmsTitle){
            this.setState({title: this.props.dmsTitle })
        }
    }

    componentDidMount() {
        //   App.cable.subscriptions.create(
        //     { channel: "ChatDms" },
        //     {
        //         received: data => {
        //             this.props.receiveChannel(data.channel);
        //         },
        //         speak: function (data) {
        //             return this.perform("speak2", data);
        //         }
        //     }
        // );

        // this.props.fetchAllChannels()
        // this.props.fetchChannels(this.props.currentUser.id)
        // this.props.fetchUsers()
        this.props.fetchMemberships()
    }

    userId( title){
        let users = Object.values(this.props.users)
        let arr = []
        users.forEach((obj) => {
            if (obj.username === title && obj.online === true){
                arr.push(obj.id)
            }
        })
        if (arr.length !== 0){
            return true
        }
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
                <Link to={`/home/channels/${this.props.channel.id}`}>
                    {this.userId(this.state.title) === true ?
                        <span id="online-button2"> <IoIosRadioButtonOn /></span> :
                        <span id="offline-button2"> <IoIosRadioButtonOn /></span>} 
                        &nbsp; {this.state.title}</Link> 
            </div>
        )
    }
}


export default DmsIndexItem