import React, {useState} from 'react';
import {useParams} from 'react-router-dom';

const Communication = ()=> {

    const [inputs, setInputs] = useState({
        text: '',
        morse: ''
    })

    const handleChange = e =>{
        setInputs({...inputs, [e.target.name]: e.target.value});
        console.log(inputs);
    }

    return(
        <>
            <input value={inputs.text} name="text" onChange={handleChange} type="text" className="border-8 border-purple-900 rounded-md m-6 p-6"/>
            <input value={inputs.morse} name="morse" onChange={handleChange} type="text" className="border-8 border-purple-900 rounded-md m-6 p-6"/>
        </>
    )
}

export default Communication;