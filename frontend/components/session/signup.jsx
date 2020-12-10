import React from 'react';

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
    }

    handleDemo(e){
        e.preventDefault();
        this.props.createSession(this.props.demo)
    }


    render (){
        return(
            <div className ='formpage'>

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
                    <button className='session' onClick={this.handleSubmit}>Continue</button>
                    <button className='button2'onClick={this.handleDemo}>Sign in as a Demo User</button>

                </form>

            </div>
        )
    }
}

export default Signup 