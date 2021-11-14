import React from 'react';
import {useParams} from 'react-router-dom';
import MapView from './MapView';

const GeolocationPart = ()=>{
    let params = useParams();
    if (params.part === "1") {
        return <MapView/>
    } else if (params.part === "2"){
        return <GeolocationPart/>
    }

    return(
        <h1>PAGE NOT FOUND</h1>
    )
};

export default GeolocationPart