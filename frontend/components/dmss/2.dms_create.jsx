import React from 'react';
import { BsPersonSquare } from 'react-icons/bs'
import { Link } from 'react-router-dom'

class DmsCreate extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)

        this.state = {
            title: '',
            description: ''}
    }

    componentDidMount() {
        this.props.fetchUsers()
    }

    handleClick(user) {
            this.setState({ [title]: user.username });
            this.props.createChannel(this.state)
            .then(() => this.props.closeModal())
    }

    render() {
        return (
            <div >
                {Object.values(this.props.users).map((user, i) => (
                    <li key={i} >
                        <div onClick={this.props.closeModal}>
                            <Link to={`/home/dm/${user.username}`}> <BsPersonSquare /> {user.username} </Link>
                            {/* <Link to={`/home/channels/${channel.id}`}>{member.title}</Link> */}
                        </div>
                    </li>
                ))}

            </div>
        )
    }
}

export default DmsCreate