import React from 'react';
import { RiCloseLine} from 'react-icons/ri'

class ChannelCreate extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            title:'',
            description:''
            // is_private: false, 
        }
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value });
        };
    }

    // handleToggle(){
    //     let is_private = this.state.is_private;
    //     if (is_private === true){
    //         is_private = false 
    //     } else {
    //         is_private = true
    //     }
    //     this.setState = ({is_private : is_private})
    // }

    handleSubmit(e) {
        e.preventDefault();
        const channel = Object.assign({}, this.state);
        this.props.createChannel(channel).then(this.props.closeModal);
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

    componentDidMount() {
        this.props.clearChannelErrors()
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
                    {/* <label id="is_private_checkbox"> Is Private? 
                        <input 
                            id = "private-checkbox"
                            type = "checkbox"
                            onChange = {this.handleToggle}
                        />
                    </label> */}

                    <div id='create-btn-container'>

                    <button id="create-channel-button">Create</button>
                    </div>
                    <div id="create-errors">{this.renderErrors()}</div>
                </form>
            </div>
        )
    }
}

export default ChannelCreate