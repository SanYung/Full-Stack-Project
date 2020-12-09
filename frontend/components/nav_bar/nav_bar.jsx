import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props){
        super(props)
    }
    
    display(){ 
        return(this.props.currentUser ? (
        <div>
            <button onClick={this.props.deleteSession}>Log Out</button>
        </div>
    ) : (
            <div>
                <Link className="btn" to="/login">Log In</Link>
                <Link className="btn" to="/signup">GET STARTED</Link>
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