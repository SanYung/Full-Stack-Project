import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container'
import {Link } from 'react-router-dom'
import { AiFillLinkedin, AiFillGithub, AiOutlineLogin, AiOutlineMessage} from 'react-icons/ai'
import { FaAngellist, FaReact } from 'react-icons/fa'
import { SiRedux, SiJavascript, SiPostgresql }  from 'react-icons/si'
import { DiRuby } from 'react-icons/di'
import { GrChannel } from 'react-icons/gr'
import { RiGitRepositoryPrivateFill, RiProfileLine } from 'react-icons/ri'
import { BsSearch, BsFillPeopleFill} from 'react-icons/bs'



class Home extends React.Component {
    constructor(props){
        super(props)

        this.handleDemo = this.handleDemo.bind(this)
    }

    handleDemo(e) {
        e.preventDefault();
        const user = {
            username: 'DemoUser',
            email: 'demo@aa.com',
            password: 'demo123',
            online: true, 
        }

        this.props.createSession(user)
            .then((res) => {
                return(
                this.props.updateCurrentUser({
                    id: res.user.id,
                    email: res.user.email,
                    username: res.user.username,
                    online: true }))
                })
            // .then((res) => {
            //         console.log(res)
            //     App.cable.subscriptions.create(
            //         { channel: "UsersChannel" },
            //         {
            //             received: (data) => {
            //                 console.log('received on userchannel:', data)
            //                 this.props.receiveUpdatedUser(data);
            //             },
            //             speak: function (data) {
            //                 console.log('spoken on userchannel:', data)
            //                 this.perform("speak", data);
            //             },
            //         }
            //     );
            //     return res;
            // })
            // .then((res) => {
            //     console.log(App.cable.subscriptions.subscriptions[1])
            //     App.cable.subscriptions.subscriptions[1].speak({
            //         user: {
            //             id: res.user.id,
            //             email: res.user.email,
            //             username: res.user.username,
            //             online: true,
            //         },
            //     });
            // })
            .then(() => this.props.history.push('/home/channels/101'));
    

    }
      
    

    render(){
        return(
            <div className='home'>
                <NavBarContainer />
                <div className="main">
                    <div className="col1">
                        <div id="content1">
                            <h1 id="headtext"> Welcome to your new HQ </h1>
                            <p id="subtext">Teamwork can be hard, messy, complicated… and still the best way to work. That’s why we made Quack — a place where people get work done, together.</p>
                            <button id='demo'onClick={this.handleDemo}>Try as a Demo User</button>
                        </div>
                        <div><img id="photo1" src={window.col1} /></div>
                    </div>
                    <div className="col2">
                        <span><img id="photo2" src={window.slackURL} /></span>
                        <span id="content2">
                            <h1 id="headtext">A better way to communicate</h1>
                            <p id="subtext">Unlike email, conversations in Quack are easy to follow. And they’re more than conversations — you can make calls, share files, and even connect with other apps.</p>
                        </span>
                    </div>
                </div>

                <div className="main2">
                    <div className='main2-header'>Quack is made by San Yung <br></br>and inspired by the Slack product</div>
                    <div><img id="photo3" src={window.main2} /></div>
                    <div>
                        <a className="hpicon" href="https://www.linkedin.com/in/sansan-kung/" target="_blank"><AiFillLinkedin /></a>
                        <a className="hpicon" href="https://github.com/SanYung" target="_blank"><AiFillGithub /></a>
                        <a className="hpicon" href="https://angel.co/u/san-yung" target="_blank"><FaAngellist /></a>
                    </div>
                </div>

            <footer id="footer"> 
                <div className='footer-purple'>
                    <div id="footer-purple-header">Choose a better way to work</div>
                    <Link to="/login"><button id='footer-button' >TRY FOR FREE</button></Link>
                </div>

         
                <div className="footer-content">
                        <div id="footer-duck"> <img src={window.logo} /></div>
                    <div className='frameworks'> <span id="footer-cat-header">Frameworks</span>
                        <ul id="footer-list">
                                <li>< FaReact/> &nbsp;React</li>
                                <li>< SiRedux /> &nbsp;Redux</li>
                                <li><SiJavascript /> &nbsp;Javascript</li>
                                <li>< DiRuby /> &nbsp;Ruby on Rails</li>
                                <li><SiPostgresql /> &nbsp;PostreSQL</li>
                        </ul>
                    </div>
            
                    <div className='aboutme'><span id="footer-cat-header"> About Me</span>
                        <ul id="footer-list">
                                <li><a href="https://www.linkedin.com/in/sansan-kung/" target="_blank">< AiFillLinkedin/>&nbsp;LinkedIn</a></li>

                                <li><a href="https://github.com/SanYung" target="_blank">< AiFillGithub />&nbsp;GitHub</a></li>

                                <li><a href="https://angel.co/u/san-yung" target="_blank">< FaAngellist />&nbsp;AngelList</a></li>
                                <li> <a href="https://sanyung.dev/" target="_blank"><RiProfileLine/> &nbsp;Portfolio</a></li>

                        </ul>
                    </div>
                    <div className='features'> <span id="footer-cat-header"> Features</span>
                        <ul id="footer-list">
                            <li>< AiOutlineLogin />&nbsp;User Authentication</li>
                            <li>< AiOutlineMessage />&nbsp;Real-time messaging</li>
                            <li><GrChannel /> &nbsp;Create, read, update, destroy channels</li>
                            <li>< RiGitRepositoryPrivateFill />&nbsp;Public and private channels</li>
                            <li>< BsSearch />&nbsp;Search channels and users</li>
                            <li>< BsFillPeopleFill />&nbsp;See who's joined your channel</li>
                        </ul>
                    </div>
                </div>

            </footer> 
            </div>
        )
    }

}

export default Home