import React from 'react';

class ChannelAdd extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchChannels(this.props.currentUser.id)
   
    }

    handleClick(e) {
        e.preventDefault()
        this.props.updateChannel(this.state).then(this.props.closeModal);
    }


    render() {
        return (
            <div >  
                {this.props.channels.map((channel) => (
                    <div key={channel.id}>
                        
                    </div>
                ))}
                
            </div>

        )
    }
}

export default ChannelAdd
