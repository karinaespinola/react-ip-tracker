import React from 'react';
import { ReactComponent as SearchIcon } from '../img/icon-arrow.svg';
import {IpDataContext} from '../context/IpDataProvider';
import { useAlert } from 'react-alert';
import axios from 'axios';

const SearchBar = () => {
    const [searchInput, setSearchInput] = React.useState('');
    const {ipData, updateIpData} = React.useContext(IpDataContext);
    const alert = useAlert();
    
    const searchApi = () => {
        if( ! checkInput()) {
            showAlert('Oops! Please enter an IP adress', 'error');
            return;
        }
        axios.get(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_APIFY_API_KEY}&ipAddress=${searchInput}`)
        .then(function (response) {
          // Update the context IpDataContext data
          updateIpData(
              {
                  ...ipData,
                  ip: searchInput,
                  location: {
                      region: response.data.location.region,
                      city: response.data.location.city,
                      postalCode: response.data.location.postalCode
                  },
                  timezone: response.data.location.timezone,
                  isp: response.data.isp,
                  latitude: response.data.location.lat,
                  longitude: response.data.location.lng
              }
          )
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }

    const updateIp = (ip) => {
        setSearchInput(ip);
    }

    const checkInput = () => {
        if(searchInput === '') {
            return false;
        }

        return true;
    }

    const showAlert = (message, type) => {
        alert.show(message, {
            timeout: 3000, // custom timeout just for this one alert
            type: type,
          });
    }

    return (
        <div className="d-flex">
            <input 
            type="text" 
            name="search" 
            id="search" 
            className="searchbar"
            placeholder="Search for any IP address or domain"
            onChange={(e) => {updateIp(e.target.value)}}
            value={searchInput}
            />
            <button 
            className="btn-search"
            onClick={() => {searchApi()}}
            >
                <SearchIcon/>
            </button>
        </div>
    )
}

export default SearchBar
