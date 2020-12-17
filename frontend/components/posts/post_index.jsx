import React from 'react';
import PostCreateContainer from './post_create_container'


class PostIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPosts(this.props.channelId)
    }

    componentDidUpdate(previousProps){
        if (previousProps.match.params.channelId !== this.props.channelId){
            this.props.fetchPosts(this.props.channelId)
        }
    }

    render() {

        return (
            <div id="postindex">
            
                {this.props.posts.map((post) => (
                    <div className="postList" key={post.id}>

                        <img id="demoprofile" src={window.profileURL} />
                        <br></br>
                        <div className="post-content">
                            <div id="authorstuff"><div id="author">{this.props.users[post.user_id].username} </div> &nbsp;&nbsp; <div id="timestamp">{post.created_at}</div></div>             
                                <br></br>
                            <div id="message">{post.body}</div>
                        </div>
                    </div>
                ))}
    
     


                <div className="postform-container" >
                < PostCreateContainer channel={this.props.channel} channelId={this.props.channelId}/>
                </div>
            </div>
        )
    }

}

export default PostIndex
