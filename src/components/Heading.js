import React from 'react';
import background from '../img/pattern-bg.png';
import SearchBar from './SearchBar';

const Heading = () => {
    return (
        <div 
        className="heading"
        style={{backgroundImage: `url(${background})`}}
        >
            <div className="container">
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
            </div>            
        </div>
    )
}

export default Heading
