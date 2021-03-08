import React from "react";
import { Link } from 'react-router-dom'
import { AiFillLinkedin, AiFillGithub, AiOutlineSearch} from 'react-icons/ai'
import { FaAngellist } from 'react-icons/fa'
import { RiProfileLine } from 'react-icons/ri'


class Searchbar extends React.Component {
    constructor(props) {
        super(props);
     
    }

    render() {

        return (

            <div className="search-bar" >
                <div className="leftside-search">
                    <Link to={'/'}><img id="duck2" src={window.logo} />  </Link>
                    {this.props.currentUser.photoUrl ? <img src={this.props.currentUser.photoUrl} className='profilepicture' /> : <img className='profilepicture' src = { window.profileURL2 } /> }
                </div>

                <div className="search-bar-content" onClick={()=> this.props.openModal('search')}>
                    <AiOutlineSearch />
                    <p>Search Your Workspace</p>
                </div>
                <div className="searchbaricon">
                    <a href='https://www.linkedin.com/in/sansan-kung/' className="aboutme-search" target="_blank"><AiFillLinkedin /></a>
                    <a href="https://github.com/SanYung" className="aboutme-search" target="_blank"><AiFillGithub /></a>
                    <a href="https://angel.co/u/san-yung" className="aboutme-search" target="_blank"><FaAngellist /></a>
                    <a href="https://sanyung.dev/" className="aboutme-search" target="_blank"><RiProfileLine /></a>
                </div>

            </div>



        );
    }
}


export default Searchbar;
