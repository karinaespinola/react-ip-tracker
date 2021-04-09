import React from 'react'
import Divider from './Divider';

const SearchResult = () => {
    return (
        <div className="card d-flex align-items-center">
            <div className="result-element text-center">
                <h3 className="result-title">IP Address</h3>
                <div className="result-body">127.0.0.1</div>
            </div>
            <Divider />
            <div className="result-element text-center">
                <h3 className="result-title">Location</h3>
                <div className="result-body"></div>
            </div>
            <Divider />
            <div className="result-element text-center">
                <h3 className="result-title">Timezone</h3>
                <div className="result-body"></div>
            </div>
            <Divider />
            <div className="result-element text-center">
                <h3 className="result-title">ISP</h3>
                <div className="result-body"></div>
            </div>
        </div>
    )
}

export default SearchResult
