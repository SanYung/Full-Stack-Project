import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props){
        super(props)
    }
    
    display(){ 
        return(this.props.user ? (
        <div>
            <button onClick={this.props.deleteSession}>Log Out</button>
        </div>
    ) : (
            <div>
                <Link className="btn" to="/signup">Sign Up</Link>
                <Link className="btn" to="/">Log In</Link>
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