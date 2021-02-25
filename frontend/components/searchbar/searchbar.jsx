import React from "react";
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'

class Searchbar extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {

        return (

            <div className="search-bar" >
                <div className="search-bar-content" onClick={()=> this.props.openModal('search')}>
                    <AiOutlineSearch />
                    <p>Search Your Workspace</p>
                </div>
            <Link id="duck2" to={'/'}><img src={window.logo} />  </Link>
            </div>



        );
    }
}


export default Searchbar;