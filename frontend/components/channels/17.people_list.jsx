import React from 'react';
import { Link } from 'react-router-dom'
import { BsPersonSquare } from 'react-icons/bs'

class PeopleList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.fetchUsers
    }

    render() {
        return (
            <div >
                {this.props.list.map((memberId, i) => (
                    <li key={i} >
                        <div onClick={this.props.closeModal}>
                            <BsPersonSquare />
                            {this.props.users[memberId].username}
                            {/* <Link to={`/home/channels/${channel.id}`}>{member.title}</Link> */}
                        </div>
                    </li>
                ))}

            </div>

        )
    }
}

export default PeopleList
