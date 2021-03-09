import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props){
        super(props)
        this.handleLogout = this.handleLogout.bind(this);
    }
    

    handleLogout(e){
        const user = {
            username: this.props.currentUser.email,
            email: this.props.currentUser.email,
            id: this.props.currentUser.id,
            online: false,
        };
        e.preventDefault();
        this.props.updateCurrentUser(user)
            // .then((res) => {
            //     if (App.cable.subscriptions.subscriptions[1]) {
            //         App.cable.subscriptions.subscriptions[1].speak({
            //             user: user,
            //         });
            //     }

            //     return res;
            // })
            // .then(() => {
            //     App.cable.subscriptions.subscriptions = [];
            // });

        .then((res) => this.props.deleteSession(res))
    }
    display(){ 
        return(this.props.currentUser ? (
        <div className="navbarcontainer">
            <div className="navbar">
                <span className='left-nav'>
                    <img id="duck" src={window.logo} />
                    <Link id="logo" to="/">Quack</Link> &nbsp;&nbsp;
                    <a href='https://www.linkedin.com/in/sansan-kung/' className="aboutme" target="_blank">LinkedIn</a>
                        <a href="https://github.com/SanYung" className="aboutme2" target="_blank">GitHub</a>
                        <a href="https://angel.co/u/san-yung" className="aboutme3" target="_blank">AngelList</a>
                        <a href="https://sanyung.dev/" className="aboutme3" target="_blank">Portfolio</a>
                </span>
                <span className="right-nav">
                        <button className="logoutbutton" onClick={this.props.deleteSession}>Log Out</button>
                </span>

            </div>
        </div>
    ) : (
        <div className = "navbarcontainer" >
            <div className="navbar">
                <span className='left-nav'>
                        <img id="duck" src={window.logo} />
                        <Link id="logo" to="/">Quack</Link> &nbsp;&nbsp;
                        <a href='https://www.linkedin.com/in/sansan-kung/' className="aboutme" target="_blank">LinkedIn</a>
                            <a href="https://github.com/SanYung" className="aboutme2" target="_blank">GitHub</a>
                            <a href="https://angel.co/u/san-yung" className="aboutme3" target="_blank">AngelList</a>
                            <a href="https://sanyung.dev/" className="aboutme3" target="_blank">Portfolio</a>
                </span>

                <span className="right-nav">
                <Link id="loginbutton"  to="/login"><span>Log In</span></Link>
                <Link id="signupbutton" to="/signup">SIGN UP</Link>
                </span>
            </div>
        </div>
        )
    )}

    render(){
        return (
                <div>
                    {this.display()}
                </div>
        );
    }

}

export default Navbar