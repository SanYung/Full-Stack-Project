import React from 'react';

class PostCreate extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            channel_id: this.props.channelId,
            body: '',
        }
    }

    handleSubmit(e){
        e.preventDefault();  
        const post = Object.assign({}, this.state);
        this.props.createPost(post).then(()=> this.setState( {body:''}))
     }

    update(parameters) {
        return (e) => {
            this.setState({ [parameters]: e.currentTarget.value })
        };
    }

    renderErrors() {
        return (
            <ul>
                {this.props.posterrors.map((error, i) => (
                    <li key={i}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    componentDidMount() {
        this.props.clearPostErrors()
    }


    render(){
        return (
            <div  >
                <form className="PostForm" onSubmit={this.handleSubmit}>
                    <input 
                    id= "postform-input"
                    type="text" 
                    // placeholder={this.props.channels[this.state.channelId].title}
                    value={this.state.body}
                    onChange={this.update('body')}
                    />

                    <button></button>
                    {this.renderErrors()}
                </form>
            </div>
        )
    }


}



export default PostCreate