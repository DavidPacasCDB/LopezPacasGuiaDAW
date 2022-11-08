function Procesar(){
	document.write("<h3>Bienvenido al sistema</h3>");
	document.write("<h3>su exponente es igual a </h3>"); 
	alert("Bienvenido al sistema de calculo de exponente de digito");
	var numero1 = prompt("Ingrese el numero base a ocupar");
	var numero2 = prompt("Ingrese el numero exponente a ocupar");
	var potencia = numero1**numero2;
	document.write("<input readonly value="+potencia+"></input>");
}

Procesar();