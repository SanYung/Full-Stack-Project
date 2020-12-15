import React from 'react';

class ChannelCreate extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            title:'',
            description:'',
        }
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value });
        };
    }

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
            <div className="createform">
                <div className='form'>

                    <form className='channel-form' onSubmit={this.handleSubmit}>
                        <div onClick={this.props.closeModal} className="close-x">X</div>
                        <h2 id="channel-title">Create a Channel</h2>
                        <p id="channel-subtitle">Channels are where your team communicates. They’re best when organized around a topic — #development, for example.</p>
                        <label>Name
                            <input
                                id="input-field"
                                type="text"
                                value={this.state.title}
                                onChange={this.handleInput('title')}
                            />
                        </label>
                        <label>Description (optional)
                            <input
                                id="input-field"
                                type="text"
                                value={this.state.description}
                                onChange={this.handleInput('description')}
                            />
                        </label>
        
                        <button className="createchannel-button">Create</button>
                        {this.renderErrors()}

                    </form>
                </div>
            </div>
        )
    }
}

export default ChannelCreate