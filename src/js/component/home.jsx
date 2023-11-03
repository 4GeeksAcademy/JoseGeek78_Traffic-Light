import React, {useState} from 'react';
import "../../styles/index.css";


function Semaforo ()  {

	const [rojoBackground, setrojoBackground] = useState("grey");
	const [amarilloBackground, setamarilloBackground] = useState("grey");
	const [verdeBackground, setverdeBackground] = useState("grey");

	function rojo () {
	console.log("rojo");
	
	if (rojoBackground === "red"){
		setrojoBackground ("grey")
	} else {
		setrojoBackground ("red")
		setamarilloBackground ("grey")
		setverdeBackground ("grey")
	}

}
	
	function amarillo () {
		console.log("amarillo");
		
		if (amarilloBackground === "yellow"){
			setamarilloBackground ("grey")
		} else {
			setamarilloBackground ("yellow")
			setrojoBackground ("grey")
			setverdeBackground ("grey")
		}

	}
	
		function verde () {
			console.log("verde");
			
			if (verdeBackground === "green"){
				setverdeBackground ("grey")
			} else {
				setverdeBackground ("green")
				setrojoBackground ("grey")
				setamarilloBackground ("grey")
			}
		}
		
		
	return (
		<>
		<div className= " semaforo-container" >
		<button style={{backgroundColor: rojoBackground, width: 150,
    height: 150, marginTop:30,borderRadius:100}} onClick={rojo}></button>
		<button style={{backgroundColor: amarilloBackground, width: 150,
    height: 150, margin:15, borderRadius:100,}} onClick={amarillo}></button>
		<button style={{backgroundColor: verdeBackground, width: 150,
    height: 150, margin:0, borderRadius:100}} onClick={verde}></button>
		</div>
		</>
	);

};

export default Semaforo;