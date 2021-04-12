import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {IpDataContext} from '../context/IpDataProvider';

const Map = () => {
   const {ipData} = React.useContext(IpDataContext);

    return (
        <MapContainer 
        center={[51.505, -0.09]} 
        zoom={13} 
        scrollWheelZoom={false} 
        className="map"
        >
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
            </Marker>
        </MapContainer>
    )
}

export default Map
