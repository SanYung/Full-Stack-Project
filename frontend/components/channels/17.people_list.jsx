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
                <div >Member List</div>
                <div>click a member to message</div>
                {this.props.list.map((memberId, i) => (
                    <li key={i} >
                        <div onClick={this.props.closeModal}>
                            <BsPersonSquare />
                            <Link to={`/home/dm/${this.props.users[memberId].username}`}>{this.props.users[memberId].username}</Link>
                        </div>
                    </li>
                ))}

            </div>

        )
    }
}

export default PeopleList
