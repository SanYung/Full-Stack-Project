import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai'

export default class Searchbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="search-bar">
                <div className="search-bar-content">
                    <AiOutlineSearch />
                    <p>Search Your Workspace</p>
                </div>
            </div>

        );
    }
}