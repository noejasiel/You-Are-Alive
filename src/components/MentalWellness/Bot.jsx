import React, { useState } from 'react';

const Bot = ()=>{
    const [input,setInput] = useState('')
    const handleClick = ()=> setInput('')
    const handleChange = e =>{
        setInput(e.target.value)
    }
    return(
        <div className="flex-col w-full grid justify-items-center mt-14 ">
            <h2 className="text-gray-800 text-center my-10 font-bold text-3xl">De que te gustaria que hablaramos el dia de hoy?</h2>
            <textarea value={input} onChange={handleChange} placeholder="Escrie lo que desees..." type="text" name="" className="border-purple-900 w-11/12 border-2 rounded-md p-4" />
            <button onClick={handleClick} className="bg-purple-600 rounded-md p-2 text-white font-bold mt-5">Terminar escritura</button>
        </div>
    )
};

export default Bot;