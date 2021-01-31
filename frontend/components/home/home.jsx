import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container'

class Home extends React.Component {
    constructor(props){
        super(props)

        this.handleDemo = this.handleDemo.bind(this)
    }

 

    handleDemo(e) {
        e.preventDefault();
        const demo = {
            username: 'DemoUser',
            email: 'demo@aa.com',
            password: 'demo123',
        }

        this.props.createSession(demo)
            .then(() => this.props.history.push('/home/channels'));
    }

    render(){
        return(
            <div className='home'>
                <NavBarContainer />
                <span className="main">
                    <span className="col1">
                        <span id="content1">
                            <h1 id="headtext"> Welcome to your new HQ </h1>
                            <p id="subtext">Teamwork can be hard, messy, complicated… and still the best way to work. That’s why we made Slack — a place where people get work done, together.</p>
                            <button id='demo'onClick={this.handleDemo}>Try as a Demo User</button>
                        </span>
                        <span><img id="photo1" src={window.slack2URL} /></span>
                    </span>
                    <span className="col2">
                        <span><img id="photo2" src={window.slackURL} /></span>
                        <span id="content2">
                            <h1 id="headtext">A better way to communicate</h1>
                            <p id="subtext">Unlike email, conversations in Slack are easy to follow. And they’re more than conversations — you can make calls, share files, and even connect with other apps.</p>
                        </span>
                    </span>
                </span>
                <footer id="footer"> 
                    {/* <ul className="skills">Skills
                        <li>Ruby</li>
                        <li>Javascript</li>
                        <li>Rails</li>
                        <li>React-Redux</li>
                        <li>CSS</li>
                        <li>HTML</li>
                        <li>SQL</li>
                    </ul>
                    <ul className="portfolio">Portfolio
                        <li><a  href="https://github.com/SanYung">GitHub</a></li>
                        <li><a  href="https://www.linkedin.com/in/sansan-kung/">Linkedin</a></li>
                        <li>Project2</li>
                        <li>Project3</li>
                    </ul> */}
                </footer> 
            </div>
        )
    }

}

export default Home