import React from 'react';
import { useParams } from 'react-router-dom';
import Bot from './Bot';
import Inventario from './Inventario';
import Tips from './Tips';

const WellnessPart = ()=>{
    let params = useParams()

    if (params.part === "1") {
        return <Bot/>
    } else if (params.part === "2"){
        return <Tips/>
    }else if (params.part === "3"){
        return <Inventario/>
    }
    return(
        <h2 className="text-gray-800 text-center my-10 font-bold text-6xl">PAGE NOT FOUND</h2>
    )
};

export default WellnessPart;