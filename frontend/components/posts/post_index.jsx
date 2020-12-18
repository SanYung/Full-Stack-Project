import React from 'react';
import PostCreateContainer from './post_create_container'



class PostIndex extends React.Component {
    constructor(props) {
        super(props)

        //action cable
        this.state = { posts: [] };
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
        this.scrollToBottom();
    }


    componentDidUpdate(previousProps){
        this.scrollToBottom();
        if (previousProps.match.params.channelId !== this.props.channelId){
            this.props.fetchPosts(this.props.channelId)
        }

        // this.bottom.current.scrollIntoView(
        //     {behavior: "smooth"}
        // );
    }

    scrollToBottom() {
        this.postEnd.scrollIntoView({ behavior: 'smooth' })
    }

    getTime(string){
        var date = new Date(string)
        let hours = date.getHours()
        let minutes = date.getMinutes()
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12
        hours = hours ? hours : 12; 
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }


    render() {
        return (
            <div id="postindex">
            
                {this.props.posts.map((post) => (
                    <div className="postList" key={post.id}>

                    { !this.props.users[post.user_id] ?  null :
                        <div className="postList">
                            <img id="demoprofile" src={window.profileURL} />
                            <br></br>
                            
                            <div className="post-content">

                            <div id="authorstuff">
                                <div id="author">{this.props.users[post.user_id].username}</div> &nbsp;&nbsp; 
                                {/* <div id="timestamp">{ Array.from(post.created_at).slice(11,16) }</div> */}
                                        <div id="timestamp">{ this.getTime(post.created_at)}</div>
                            </div>

                             <br></br> 
                             
                            <div id="message">{post.body}</div>

                        </div  > 
                    </div>
                        
                    }

                    
                    </div>
                    
                ))}
                <div ref={el => {this.postEnd = el}}></div>

                
    
                <div className="postform-container" >
                    < PostCreateContainer channelId={this.props.channelId} channel={this.props.channel}/>
                </div>


                
            </div>
        )
    }

}

export default PostIndex
