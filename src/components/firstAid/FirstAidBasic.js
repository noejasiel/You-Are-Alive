import React from 'react'
import { useParams } from 'react-router';

const FirstAidBasic = ()=>{

    const params = useParams();
    const aid = [
        {
            numero: '1',
            nombre: 'curar',
            instruccion: 'Instrucicones a hacer',
            urlImg: 'Url de la imagen'
        },
        {
            numero: '2',
            nombre: 'correr',
            instruccion: 'Instrucicones a hacer',
            urlImg: 'Url de la imagen'
        },
        {
            numero: '3',
            nombre: 'proteger',
            instruccion: 'Instrucicones a hacer',
            urlImg: 'Url de la imagen'
        }
    ]
    return(
        <section>
            <p>{aid.map( a => a.numero === params.numero ? (
                <div>
                    <p key={a.numero}>{a.nombre}</p>
                    <p>{a.instruccion}</p>
                </div>
            ) : null)}</p>
        </section>
    )
}

export default FirstAidBasic;