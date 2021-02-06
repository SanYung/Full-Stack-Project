import React from 'react';
import { RiCloseLine} from 'react-icons/ri'
import { Redirect } from 'react-router-dom'

class ChannelCreate extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            title:'',
            description:'',
            is_private: false,
        }
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value });
        };
    }

    handleToggle(){
        return (e) => { 
            this.setState({ is_private: true });
        }
    }

    componentDidMount() {
        this.props.fetchMemberships()
        this.props.clearChannelErrors()
    }

    handleSubmit(e) {
        e.preventDefault();
        const channel = Object.assign({}, this.state);
        this.props.createChannel(channel)
            .then((result) => window.location.href = `#/home/channels/${Object.values(result)[1].id}`)
            .then(this.props.closeModal())
    }

    renderErrors() {
        return (
            <ul>
                {this.props.channelerrors.map((error, i) => (
                    <li key={i}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }


    render() {
        return (
            <div className="channel-create-form">
                <form className='channel-form' onSubmit={this.handleSubmit}>

                    <div id="close-x-modal" onClick={this.props.closeModal}><RiCloseLine /></div>
                    <h2 id="channel-title">Create a Channel</h2>
                    <p id="channel-subtitle">Channels are where your team communicates. They’re best when organized around a topic — #development, for example.</p>
                    <label id='input-container'>Name
                        <input
                            id="create-input-field"
                            type="text"
                            value={this.state.title}
                            onChange={this.handleInput('title')}
                        />
                    </label>
                    <label id='input-container'>Description (optional)
                        <input
                            id="create-input-field"
                            type="text"
                            value={this.state.description}
                            onChange={this.handleInput('description')}
                        />
                    </label>


                    <div id='create-btn-container'>
                        <div className="private-checkbox">
                            <label class="switch"> 
                            <input type="checkbox" 
                                onChange={this.handleToggle()}
                            />
                                <span class="slider round"></span>
                            </label>&nbsp;&nbsp;Is Private? 
                        </div>

                    <button id="create-channel-button">Create</button>
                    </div>
                    <div id="create-errors">{this.renderErrors()}</div>
                </form>
            </div>
        )
    }
}

export default ChannelCreate