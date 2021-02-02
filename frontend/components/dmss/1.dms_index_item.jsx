import React from 'react';
import { Link } from 'react-router-dom'
import { BsPersonSquare } from 'react-icons/bs'


class DmsIndexItem extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        if (!this.props.channel) {
            return null
        }
        return (
            <div id="individualdms">
                <Link to={`/home/channels/${this.props.channel.title}`}><BsPersonSquare />&nbsp; {this.props.channel.title}</Link> 
            </div>
        )
    }
}


export default DmsIndexItem