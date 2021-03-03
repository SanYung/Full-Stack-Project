import React from "react";
import { Link } from 'react-router-dom'
import { AiFillLinkedin, AiFillGithub, AiOutlineSearch} from 'react-icons/ai'
import { FaAngellist } from 'react-icons/fa'


class Searchbar extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {

        return (

            <div className="search-bar" >
                <Link id="duck2" to={'/'}><img src={window.logo} />  </Link>
                <div className="search-bar-content" onClick={()=> this.props.openModal('search')}>
                    <AiOutlineSearch />
                    <p>Search Your Workspace</p>
                </div>
                <div className="searchbaricon">
                    <a href='https://www.linkedin.com/in/sansan-kung/' className="aboutme-search" target="_blank"><AiFillLinkedin /></a>
                    <a href="https://github.com/SanYung" className="aboutme-search" target="_blank"><AiFillGithub /></a>
                    <a href="https://angel.co/u/san-yung" className="aboutme-search" target="_blank"><FaAngellist /></a>
                </div>

            </div>



        );
    }
}


export default Searchbar;
