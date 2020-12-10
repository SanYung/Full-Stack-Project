import React from 'react';
import { Link } from 'react-router-dom';
import { GiPlasticDuck } from 'react-icons/gi'

class Navbar extends React.Component {
    constructor(props){
        super(props)
    }
    
    display(){ 
        return(this.props.currentUser ? (
        <div className="navbar">
            <button className="loginbutton" onClick={this.props.deleteSession}>Log Out</button>
        </div>
    ) : (
            <div className="navbar">
                <span className='left-nav'>
                        <Link id="duck" to="/"><GiPlasticDuck /></Link>
                        <Link id="logo" to="/">Quack</Link>
                </span>

                <span className="right-nav">
                <Link className="btn" to="/login">Log In</Link>
                <Link className="btn1" to="/signup">SIGN UP</Link>
                </span>
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