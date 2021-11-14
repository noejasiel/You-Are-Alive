import React from 'react';
import {MapContainer, Marker, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Markers from './Markers';

const MapView = ()=>{
    return(
        <MapContainer center={{lat: '19.4249028',  lng:'-99.0681676'}} zoom={13}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Markers/>
        </MapContainer>
    )
}

export default MapView;