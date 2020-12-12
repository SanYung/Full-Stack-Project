import React from 'react';

class ChannelNav extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div >
                {this.props.fetchChannels()}
            </div>
        )
    }

}

export default ChannelNav