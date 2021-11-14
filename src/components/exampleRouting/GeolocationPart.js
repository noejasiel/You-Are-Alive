import React from 'react';
import {useParams} from 'react-router-dom';
import MapView from './MapView';
import Brujula from './Brujula';

const GeolocationPart = ()=>{
    let params = useParams();
    if (params.part === "1") {
        return <MapView/>
    } else if (params.part === "2"){
        return <Brujula/>
    }

    return(
        <h1>PAGE NOT FOUND</h1>
    )
};

export default GeolocationPart