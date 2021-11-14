import React, { useEffect, useState } from 'react';
import Cookie from 'universal-cookie';

const Inventario = ()=>{
    const [list, setList] = useState([])
    const [add, setAdd] = useState(false);
    const [newItem, setNewItem] = useState('')
    useEffect(()=>{
        const cookies = new Cookie();
        if (!cookies.get('list')) {
            setList([])
        // }else{
        //     setList(list.concat())
        }
    },[])

    const handleClick = ()=>setAdd(!add);
    const handleChange = e =>{
        setNewItem(e.target.value)
    }
    const handleConfirm = ()=>{
        setAdd(!add);
        setList(list.concat(newItem))
        const cookies = new Cookie();
        cookies.remove('list', {path: '/'})
        cookies.set('list', list,{path:'/'})
        setNewItem('')
    }
    const handleDele = (name)=>{
        setList(list.filter(l => l !== name))
        const cookies = new Cookie();
        cookies.remove('list', {path: '/'})
        cookies.set('list', list,{path:'/'})
    }
    return(
        <div className="flex-col w-full grid justify-items-center mt-14">
            <h2 className="text-gray-800 text-center my-10 font-bold text-3xl">Inventario</h2>
            <p className="mb-5 font-bold">{list.length === 0 ? null : '(Da soble click para borrar el item)'}</p>
            {list.length === 0
            ? <h3 className="mb-5 font-bold">No hay nada en el inventario</h3>
            : <ul>
                {list.map( (l,i) => <li className="my-3 cursor-pointer p-5 bg-purple-600 text-white font-bold" onDoubleClick={()=> handleDele(l)} key={i}>{l}</li> )}
            </ul>
            }
            {add ?(
                <>
                    <input value={newItem} onChange={handleChange} type="text" name="" className="border-purple-900 w-4/12 mt-5 border-2 rounded-md p-4" />
                    <div className="flex">
                    <button type="submit" onClick={handleConfirm} className="bg-green-600 rounded-md p-2 m-5 text-white font-bold">Confirmar</button>
                    <button onClick={handleClick} className="bg-red-600 rounded-md p-2 m-5 text-white font-bold">Cancelar</button>
                    </div>
                </>
            )
                :<button value={newItem} onClick={handleClick} className="bg-purple-600 text-white font-bold p-2 mt-10 rounded-md">Agregar item</button>
            }
        </div>
    )
};

export default Inventario;