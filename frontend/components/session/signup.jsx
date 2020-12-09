import React from 'react';
import { bindActionCreators } from 'redux';

class Signup extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(type){
        return (e) => {
            this.setState({[type]: e.currentTarget.value});
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createUser(this.state)
            .then(() => this.props.history.push('/'))
    }


    render (){
        return(
            <div className ='session-form'>
                <h2>Sign up for Quack</h2>
                <p>Enter your <b>username</b>, <b>password</b>, and <b>email</b>.</p>
                <form>
                    <label>Username:
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        />
                    </label>
                    <label>Email:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>

            </div>
        )
    }
}

export default Signup 