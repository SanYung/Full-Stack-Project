import React from 'react';
import PostCreateContainer from './post_create_container'
import { HiOutlineHashtag } from 'react-icons/hi'
import { withRouter } from 'react-router-dom'

class PostIndex extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
        this.handleRender = this.handleRender.bind(this)
        this.handleStyle = this.handleStyle.bind(this)
        // this.state = { class: 'postindex'};
    }

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
        this.props.fetchAllChannels()
        this.props.fetchChannels(this.props.userId)
        this.props.fetchPosts(this.props.channelId)
        this.props.fetchUsers()
        // this.scrollToBottom();
    }
    
    componentDidUpdate(previousProps){
        if (this.props.memberships !== previousProps.memberships) {
            this.props.fetchAllMemberships
        }
        
        if (previousProps.match.params.channelId !== this.props.channelId) {
            this.props.fetchPosts(this.props.channelId)
            this.props.fetchChannels(this.props.userId)
        }
        
        if (this.props.channelShowSelector === true){
            this.scrollToBottom()
        }

   
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

    handleClick(e){
        e.preventDefault()
        this.props.createMembership(this.props.channelId, this.props.currentUser.id )
            .then(() => this.props.history.push(`/home/channels/${this.props.channelId}`))
            .then(window.location.reload());
    }


    handleStyle(){
        if (this.props.location.pathname === `/home/channels/${this.props.channelId}/details` ) {
            // this.setState({ class: "postindex2" })
            return "postindex2"
        }
        else if (this.props.location.pathname === `/home/channels/${this.props.channelId}`) {
            // this.setState({ class: "postindex" })
            return "postindex"

        }
    }

    handleRender() {
        if (this.props.channelShowSelector === true && this.props.channelMembership === false) {
            return (
                <div id={this.handleStyle()}>
                      {this.props.posts.map((post) => (
                        <div className="postList" key={post.id}>
                            { !this.props.users[post.user_id] ? null :
                                <div className="postList">
                                    <img id="demoprofile" src={window.profileURL} />
                                    <br></br>
                                    <div className="post-content">
                                        <div id="authorstuff">
                                            <div id="author">{this.props.users[post.user_id].username}</div> &nbsp;&nbsp;
                                            <div id="timestamp">{this.getTime(post.created_at)}</div>
                                        </div>
                                        <br></br>
                                        <div id="message">{post.body}</div>
                                    </div  >
                                </div>
                            }
                        </div>
                    ))}
                    <div ref={el => { this.postEnd = el }}></div>
                    <div className="postform-container" >
                        < PostCreateContainer channelId={this.props.channelId} channel={this.props.channel} />
                    </div>
                </div>
            )
        } else if (this.props.channelShowSelector !== true && this.props.channelx && this.props.channelMembership === false){
            return (
                <div id={this.handleStyle()} >
                    <div className="notjoined">
                        <div>You are viewing <HiOutlineHashtag /> {this.props.channelx.title}</div>
                        <button id="join-button" onClick={this.handleClick}>Join Channel</button>
                    </div>
                </div>
            )
        } else if (this.props.channelMembership === true ) {
            return(
                <div id={this.handleStyle()} >
                {this.props.posts.map((post) => (
                    <div className="postList" key={post.id}>
                        { !this.props.users[post.user_id] ? null :
                            <div className="postList">
                                <img id="demoprofile" src={window.profileURL} />
                                <br></br>
                                <div className="post-content">
                                    <div id="authorstuff">
                                        <div id="author">{this.props.users[post.user_id].username}</div> &nbsp;&nbsp;
                                            <div id="timestamp">{this.getTime(post.created_at)}</div>
                                    </div>
                                    <br></br>
                                    <div id="message">{post.body}</div>
                                </div  >
                            </div>
                        }
                    </div>
                ))}
                <div ref={el => { this.postEnd = el }}></div>
                <div className="postform-container" >
                        {/* < PostCreateContainer channelId={this.props.channelId} channel={this.props.channel} /> */}
                </div>
            </div>)
        }
    }


    render() {
    
        return (
            <div >{this.handleRender()}</div>
        )
    }
}

export default withRouter(PostIndex)
