import React from 'react';

class ChannelsMain extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div >
                <button className="logoutbutton" onClick={this.props.deleteSession}>Log Out</button>
                <p>this is my channels component</p>
            </div>
        )
    }

}

export default ChannelsMain