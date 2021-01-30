import React from 'react';
import { ReactComponent as SearchIcon } from '../img/icon-arrow.svg';

const SearchBar = () => {
    return (
        <div className="d-flex">
            <input 
            type="text" 
            name="search" 
            id="search" 
            className="searchbar"
            placeholder="Search for any IP address or domain" 
            />
            <button className="btn-search">
                <SearchIcon/>
            </button>
        </div>
    )
}

export default SearchBar
