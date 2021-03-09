import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container'

class Signup extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.user
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDemo = this.handleDemo.bind(this)
    }

 
    handleInput(type){
        return (e) => {
            this.setState({[type]: e.currentTarget.value});
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createUser(this.state)
        // .then((res) => {
        //     this.props.updateCurrentUser({
        //         id: res.user.id,
        //         email: res.user.email,
        //         username: res.user.username,
        //         online: true})
        //     })
        .then(() => this.props.history.push('/home/channels/82'));
    }

    handleDemo(e){
        e.preventDefault();
        this.props.createSession(this.props.demo)
        // .then((res) => {
        //     this.props.updateCurrentUser({
        //         id: res.user.id,
        //         email: res.user.email,
        //         username: res.user.username,
        //         online: true})
        //     })
        .then(() => this.props.history.push('/home/channels/82'));
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error,i) => (
                    <li>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    componentDidMount(){
        this.props.clearErrors()
    }


    render (){
        return(
            <div className='compcontainer'>
                <NavBarContainer/>
            <div className='formpage'>
                <form className='session-form'> 
                    <h2 id="formtitle">Sign up</h2>
                    <p id="formsubtitle"> Enter your <b>display name</b>, <b>email</b>, and <b>password</b>.</p>
                    <label>
                        <input
                            id="input-field"
                            placeholder="display name"
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        />
                    </label >
                    <label >
                        <input
                            id="input-field"
                            placeholder="email"
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    <label>
                        <input
                            id="input-field"
                            placeholder="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <button className='continue' onClick={this.handleSubmit}><span>Continue</span></button>
                    <button className='button2'onClick={this.handleDemo}>Sign in as a Demo User</button>
                        {this.renderErrors()}
                </form>
            </div>
            </div>
        )
    }
}

export default Signup 