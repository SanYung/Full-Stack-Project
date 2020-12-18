import React from 'react';
import PostCreateContainer from './post_create_container'



class PostIndex extends React.Component {
    constructor(props) {
        super(props)

        //action cable
        this.state = { posts: [] };
        // this.bottom = React.createRef();
    }

    //action cable
    componentDidMount() {
        App.cable.subscriptions.create(
            { channel: "ChatChannel" },
            {
                received: data => {
                    this.props.receivePost(data.post);
                },
                speak: function (data) {
                    return this.perform("speak", data);
                }
            }
        );
        this.props.fetchPosts(this.props.channelId),
        this.props.fetchUsers()
    }


    componentDidUpdate(previousProps){
        if (previousProps.match.params.channelId !== this.props.channelId){
            this.props.fetchPosts(this.props.channelId)
        }

        // this.bottom.current.scrollIntoView(
        //     {behavior: "smooth"}
        // );
    }

    render() {
        return (
            <div id="postindex">
            
                {this.props.posts.map((post) => (
                    <div className="postList" key={post.id}>

                    { !this.props.users[post.user_id] ?  'e2d2' :
                        <div className="postList">
                            <img id="demoprofile" src={window.profileURL} />
                            <br></br>
                            
                            <div className="post-content">

                            <div id="authorstuff">
                                <div id="author">{this.props.users[post.user_id].username}</div> &nbsp;&nbsp; 
                                <div id="timestamp">{post.created_at}</div>
                            </div>

                             <br></br> 
                             
                            <div id="message">{post.body}</div>

                        {/* <div ref={ (ele) => this.bottom = ele} />  */}

                            </div>
                        </div>
                        
                    }
                    
                    </div>
                ))}
    
                <div className="postform-container" >
                    < PostCreateContainer channelId={this.props.channelId} channel={this.props.channel}/>
                </div>


                
            </div>
        )
    }

}

export default PostIndex
