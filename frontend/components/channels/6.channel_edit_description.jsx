import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { RiCloseLine } from 'react-icons/ri'

class ChannelEditDes extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.channel;
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.props.fetchChannel(this.props.channel.id)
        this.props.clearChannelErrors()
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

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={i}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render(){      
        return(                  
            <div className="channel-create-form">
                < form className="channel-form" onSubmit={ this.handleSubmit } >
                    <div id="close-x-modal" onClick={this.props.closeModal}><RiCloseLine /></div>
                    <h1 id="channel-title">Edit Channel Description</h1>

                    <label id='input-container'>
                        <input 
                        id="create-input-field"
                        type='text'
                        onChange={this.update('description')}
                        />
                    </label>
                    
                    <div id="create-btn-container">
                        <button id="create-channel-button" type='submit' value={this.props.description} >Update</button>
                    </div>
                </form >
                <div id="create-errors">{this.renderErrors()}</div>    
            </div>

        )
    }

}

export default ChannelEditDes
