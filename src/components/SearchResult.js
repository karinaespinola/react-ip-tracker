import React from 'react'
import Divider from './Divider';
import {IpDataContext} from '../context/IpDataProvider';

const SearchResult = () => {
    const {ipData, updateIpData} = React.useContext(IpDataContext);

    return (
        <div className="card d-flex align-items-center">
            <div className="result-element text-center">
                <h3 className="result-title">IP Address</h3>
                <div className="result-body">{ipData.ip}</div>
            </div>
            <Divider />
            <div className="result-element text-center">
                <h3 className="result-title">Location</h3>
                <div className="result-body">
                    {
                        ipData.location === null
                        ? "-"
                        : <>
                            {ipData.location.region}, {ipData.location.city} <br/>
                            {ipData.location.postalCode}
                        </>
                    }
                </div>
            </div>
            <Divider />
            <div className="result-element text-center">
                <h3 className="result-title">Timezone</h3>
                <div className="result-body">{ipData.timezone}</div>
            </div>
            <Divider />
            <div className="result-element text-center">
                <h3 className="result-title">ISP</h3>
                <div className="result-body">{ipData.isp}</div>
            </div>
        </div>
    )
}

export default SearchResult
