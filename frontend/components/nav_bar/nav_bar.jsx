import React from 'react';
import { Link } from 'react-router-dom';
import { GiPlasticDuck } from 'react-icons/gi'

class Navbar extends React.Component {
    constructor(props){
        super(props)
    }
    
    display(){ 
        return(this.props.currentUser ? (
        <div className="navbarcontainer">
            <div className="navbar">
                <button className="logoutbutton" onClick={this.props.deleteSession}>Log Out</button>
            </div>
        </div>
    ) : (
        <div className = "navbarcontainer" >
            <div className="navbar">
                <span className='left-nav'>
                        <Link id="duck" to="/"><GiPlasticDuck /></Link>
                        <Link id="logo" to="/">Quack</Link>
                </span>

                <span className="right-nav">
                <Link id="loginbutton" to="/login">Log In</Link>
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