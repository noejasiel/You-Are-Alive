import React, { useEffect } from 'react'

const Brujula = ()=> {

    // useEffect(() => {
    //     var canvas = document.getElementById("canvas");
	// 			var ctx = canvas.getContext("2d");
	// 			var aguja;
	// 			var brujula;
	// 			var angulo;
	// 			carga();
	// 			function limpiar() {
	// 				ctx.clearRect(0, 0, 200, 200);
	// 			}

				
	// 			function carga(){
	// 				aguja = new Image();
	// 				aguja.src = 'aguja.png';

	// 				// Load the compass image
	// 				brujula = new Image();
	// 				brujula.src = 'brujula.png';
	// 				brujula.onload = imgLoaded;
	// 			}
				
	// 			function imgLoaded() {
	// 				setInterval(pintado, 1000);
	// 			}
				
	// 			function pintado(){
	// 				limpiar();
	// 				ctx.drawImage(brujula, 0, 0);
	// 				ctx.save();
	// 				ctx.translate(100, 100);
	// 				//ctx.rotate(angulo * (Math.PI / 180));
	// 				ctx.drawImage(aguja, -100, -100);
	// 				ctx.restore();
	// 				angulo += 10;
	// 			}
    // },[])

    return(
        <h1>Brujula</h1>
    )
}

export default Brujula