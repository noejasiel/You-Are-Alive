import React from 'react';

const Communication = ()=> {

    return(
        <div>
            <h2 className="text-gray-800 text-center my-10 font-bold text-6xl">TRADUCTOR MORSE</h2>
            <iframe className="mt-20" title="traductor morse" id="embed-iframe" src="https://embed.morsedecoder.com/es/" width="100%" height="400px" frameborder="0"/>
        </div>
    )
}

export default Communication;