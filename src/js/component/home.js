import React, { useState, useEffect } from "react";
import { Button } from "bootstrap";
import { unmountComponentAtNode } from "react-dom/cjs/react-dom.production.min";

// Este ejercicio comienza con todas las luces en estado apagado "gris" y según se oprimen los 
// focos así van cambiando de color rojo amarillo u verde
export function Home() {
    // Se definen 3 useState para las variables que se van a acambiar para los diferentes colores del semaforo
	const [luz1, setLuz1] = useState("apagado");
	const [luz2, setLuz2] = useState("apagado");
	const [luz3, setLuz3] = useState("apagado");

    // Se define la función handleClick para comparar los target "id" definidos para cada uno 
    // de las lamparas del semaforo, al definir la variable seleccion se pueden comparar 
    // con los id definidos
	const handleClick = e => {
		let seleccion = e.target.id;

		if (seleccion === "red") {
			if (luz1 === "red") {
				setLuz1("apagado");
			} else {
				setLuz1("red");
				setLuz2("apagado");
				setLuz3("apagado");
			}
		}
		if (seleccion === "yellow") {
			if (luz2 === "yellow") {
				setLuz2("apagado");
			} else {
				setLuz2("yellow");
				setLuz1("apagado");
				setLuz3("apagado");
			}
		}

		if (seleccion === "green") {
			if (luz3 === "green") {
				setLuz3("apagado");
			} else {
				setLuz3("green");
				setLuz1("apagado");
				setLuz2("apagado");
			}
		}
	};

    // aquí se crea un contenedor principal para centrar en el body el cual contendra 
    // 3 div para cada uno de los circulos de colores que tendrá el semaforo
    // las clases container, center,red, yellow, green estan definidas .scss
	return (
		<div className="container">
            {/* en las variables luz1, luz2, luz3 se almacenan los estados que corresponden 
            a las clases definidas en el .css y estos estados cambian con el evento onClick */}
			<div className="center">
				<div
					id="red"
					className={luz1}
					onClick={event => handleClick(event)}></div>
				<div
					id="yellow"
					className={luz2}
					onClick={event => handleClick(event)}></div>
				<div
					id="green"
					className={luz3}
					onClick={event => handleClick(event)}></div>
			</div>
		</div>
	);
}
