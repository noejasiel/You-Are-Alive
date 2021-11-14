import React from 'react';
import {MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Markers from './Markers';

const MapView = ()=>{
    return(
        <div>
            <h1 className="text-gray-800 text-center my-10 font-bold text-6xl">MAP</h1>
            <MapContainer className="mt-14 z-0" center={{lat: '19.4249028',  lng:'-99.0681676'}} zoom={13}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
                <Markers/>
            </MapContainer>
        </div>
    )
}

export default MapView;