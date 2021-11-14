import React from 'react';
import {Marker} from 'react-leaflet';
import { IconLocation } from './IconLocation';

const Markers = ()=>{
    return(
        <Marker position={{lat: '19.428525', lng: '-99.040530'}} icon={IconLocation}/>
    )
};

export default Markers;