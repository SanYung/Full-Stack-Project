import React from 'react';
import { Redirect } from 'react-router';

class Error extends React.Component {

    render(){
        return(
            <div className="errorspage">
            <div className="rails-default-error-page">
                <div className="dialog">
                    <div>
                        <h1>404: The page you were looking for doesn't exist.</h1>
      
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Error
