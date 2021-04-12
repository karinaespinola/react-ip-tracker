import React from 'react';
import background from '../img/pattern-bg.png';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

const Heading = () => {
    return (
        <div 
        className="heading"
        style={{backgroundImage: `url(${background})`}}
        >
            <div className="container" style={{position:'relative'}}>
                <h1 
                className="text-center white-text"
                style={{marginTop: '20px'}}
                >
                    IP Address Tracker
                </h1>
                <div 
                className="d-flex justify-content-center" 
                style={{marginTop: '40px'}}
                >
                    <SearchBar />
                </div>
                <div 
                style={{
                    marginTop: '70px',
                    width: '100%',
                }}
                >
                    <SearchResult/>
                </div>                                 
            </div>
        </div>
    )
}

export default Heading
