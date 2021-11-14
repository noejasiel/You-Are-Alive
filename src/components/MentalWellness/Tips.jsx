import React, { useState } from 'react';

const Tips = ()=>{
    const [frase, setFrase] = useState(false)
    const tips = [
        'Reconoce tus emociones',
        'Piensa en lo que puedes hacer para distraerte',
        'Fíjate en las cosas buenas',
        'No descuides tu salud',
        'Inhala Y Exhala'
    ]
    const frases = [
        'Piensa, sueña, cree y atrévete ',
        'Con autodisciplina casi todo es posible',
        'Los obstáculos son esas cosas atemorizantes que ves cuando apartas los ojos de tu meta',
        'Asegúrate de que colocas tus pies en el lugar correcto, y luego mantente firme',
        'Las ideas pueden cambiar la vida. A veces a lo único que tienes que abrir la puerta es a una buena idea',
        'La mejor manera para empezar es callándote y empezar a hacer',
        'Nadie se desembaraza de un hábito o de un vicio tirándolo de una vez por la ventana; hay que sacarlo por la escalera, peldaño a peldaño ',
        'Si te caes siete veces, levántate ocho',
        'La perfección no es alcanzable, pero si perseguimos la perfección podemos conseguir la excelencia',
        'Tienes que esperar cosas de ti mismo antes de poder hacerlas',
        'Transforma tus heridas en sabiduría',
        'La edad no es barrera. Es una limitación que pones en tu mente',
        'Solo aquellos que se arriesgan a ir demasiado lejos pueden descubrir lo lejos que pueden llegar',
        'Del sufrimiento emergieron las almas más fuertes, los caracteres sólidos tienen cicatrices',
        'El universo no conspira contra ti, pero tampoco se desvía para alinear tu camino'
    ]

    const handleClick = ()=>{
        // const index = (min,max)=>{
        //     return Math.random() * (max - min) + min;
        // }
        // index(frases.length, frases.length + 1);
        setTimeout(()=>{
            setFrase(true)
        }, 2000)
    }
    return(
        <div className="flex-col w-full grid justify-items-center mt-14">
            <h2 className="text-gray-800 text-center my-10 font-bold text-3xl">Tips para consevar tu salud mental</h2>
            <ul>
                {tips.map( l=>(
                    <li className="bg-purple-600 p-4 my-5 rounded-md text-white font-bold">{l}</li>
                ))}
            </ul>
            <h3 className="text-gray-800 text-center my-10 font-bold text-3xl">Frase motivacional para levantar tu animo</h3>
            <p>{frase ? frases[0] : null}</p>
            <button onClick={handleClick} className="bg-purple-600 text-white font-bold rounded-md p-2 mb-10">Ver frase</button>
        </div>
    )
};

export default Tips;