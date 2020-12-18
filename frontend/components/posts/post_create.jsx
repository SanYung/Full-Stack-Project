import React from 'react';

class PostCreate extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            user_id: this.props.user_id,
            body: ''
        }
    }


    handleSubmit(e){
        e.preventDefault();  
        App.cable.subscriptions.subscriptions[0].speak({ post: this.state });
        this.setState( {body: ''});
        
        // this.props.createPost(this.state).then(()=> this.setState( {body:''}))
     }

    update(parameters) {
        return (e) => {
            this.setState({ channel_id: this.props.channelId  ,[parameters]: e.currentTarget.value })
        };
    }

    // renderErrors() {
    //     return (
    //         <ul>
    //             {this.props.posterrors.map((error, i) => (
    //                 <li key={i}>
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

  


    render(){
        return (
            <div  >
                <form className="PostForm" onSubmit={this.handleSubmit}>
                    <input 
                    id= "postform-input"
                    type="text" 
                    placeholder={ !this.props.channel ? "" : ` message ${this.props.channel.title}`}
                    value={this.state.body}
                    onChange={this.update('body')}
                    />

                    <button></button>
                    {/* {this.renderErrors()} */}
                </form>
            </div>
        )
    }


}



export default PostCreate