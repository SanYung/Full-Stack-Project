import React from 'react';
import { BsPersonSquare } from 'react-icons/bs'
import DmsCreateItem from './3.dms_create_item'
import { Link } from 'react-router-dom'

class DmsCreate extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUsers()
        this.props.fetchAllChannels()
        this.props.fetchChannels(this.props.currentUser.id)
    }


    render() {

        return (
            <div >
                {Object.values(this.props.users).map((user) => (
                    <li key={user.id} >
                        <div >
                            < DmsCreateItem user={user} createMembership={this.props.createMembership}createChannel={this.props.createChannel} closeModal={this.props.closeModal} alreadyExistingDmessages={this.props.alreadyExistingDmessages}/>
                        </div>
                    </li>
                ))}

            </div>
        )
    }
}

export default DmsCreate