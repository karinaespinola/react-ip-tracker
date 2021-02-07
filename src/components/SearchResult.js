import React from 'react'

const SearchResult = () => {
    return (
        <div className="card d-flex">
            <div className="result-element text-center">
                <h3 className="result-title">IP Address</h3>
                <div className="result-body">Hola</div>
            </div>
            <div className="result-element text-center">
                <h3 className="result-title">Location</h3>
                <div className="result-body"></div>
            </div>
            <div className="result-element text-center">
                <h3 className="result-title">Timezone</h3>
                <div className="result-body"></div>
            </div>
            <div className="result-element text-center">
                <h3 className="result-title">ISP</h3>
                <div className="result-body"></div>
            </div>
        </div>
    )
}

export default SearchResult
