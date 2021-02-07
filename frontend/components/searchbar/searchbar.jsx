import React from "react";
import { AiOutlineSearch } from 'react-icons/ai'

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
            </div>

        );
    }
}


export default Searchbar;
