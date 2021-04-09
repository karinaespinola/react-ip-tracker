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
<<<<<<< HEAD
                    marginTop: '20px',
                    width: '100%'
=======
                    position: 'relative', 
                    width: '100%',
                    bottom: '-100px'
>>>>>>> master
                }}
                >
                    <SearchResult/>
                </div>                                 
            </div>
        </div>
    )
}

export default Heading
