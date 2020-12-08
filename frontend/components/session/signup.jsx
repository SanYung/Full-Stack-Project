import React from 'react';

class Signup extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
        };
    }

    handleInput(type){
        return (e) => {
            this.setState({[type]: e.currentTarget.value});
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createUser(this.state)
            .then(() => this.props.history.push('./______'))
    }


    render (){
        return(
            <div>

            </div>
        )
    }
}

export default Signup 