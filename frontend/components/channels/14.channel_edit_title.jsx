import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { RiCloseLine } from 'react-icons/ri'

class ChannelEditName extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.channel;
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.fetchChannel(this.props.channel.id)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.updateChannel(this.state).then(this.props.closeModal);
    }

    update(parameters) {
        return (
            e => this.setState({ [parameters]: e.currentTarget.value })
        )
    }

    render() {
        return (
            <div className="channel-create-form"> 
                < form className="channel-form" onSubmit={this.handleSubmit} >
                <div id="close-x-modal" onClick={this.props.closeModal}><RiCloseLine /></div>
                    <h1 id="channel-title">Edit Channel Name</h1>
                    <p id="channel-subtitle">You can rename a channel at any time. But, use it sparingly: it might confuse or disorient your colleagues!</p>
                <label id='input-container'>
                    <input
                        id="create-input-field"
                        type='text'
                        onChange={this.update('title')}
                    />
                </label>
                    <div id="create-btn-container">
                        <button id="create-channel-button" type='submit'>Update</button>
                </div>
            </form >
            </div>

        )
    }

}

export default ChannelEditName
