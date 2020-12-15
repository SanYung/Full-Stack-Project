import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container'
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.user
        this.handleSubmit = this.handleSubmit.bind(this)
    }
  
    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createSession(this.state)
            .then(() => this.props.history.push('/home/channels/:channelId'));
    }

    renderErrors(){
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={i}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }
    
    componentDidMount(){
        this.props.clearErrors()
    }

    render() {
        return (
            <div className="compcontainer">
                <NavBarContainer/>
            <div className='formpage'>
                <form className='session-form'>
                    <h2 id="formtitle">Sign in to <br></br> your workplace</h2>
                    <p id="formsubtitle">Enter your <b>display name</b>, <b>email</b>, and <b>password</b>.</p>
               
                    <label>
                        <input
                            id="input-field"
                            type="text"
                            placeholder="display name"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        />
                    </label>
                    <label>
                        <input
                            id="input-field"
                            type="text"
                            placeholder="name@example.com"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    <label>
                        <input
                            id="input-field"
                            type="password"
                            placeholder="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <button className="continue" onClick={this.handleSubmit}><span>Continue</span></button>
                        {this.renderErrors()}
    
                </form>
            </div>
            </div>
        )
    }
}

export default Login 