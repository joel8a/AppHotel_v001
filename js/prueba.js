//numero1  = prompt("Ingresa numeroo 1");
//numero2  = prompt("Ingresa numero 2");

//console.log(numero1);
//console.log(numero2);

//resultado = parseFloat(numero1) + parseFloat(numero2);

//console.log("Suma: " + resultado);


var coches = ["Mustang", "Jetta", "Audi A8"];

console.log(coches[0]);



function recorrerArreglo(arr){
	for(var i = 0; i < arr.length; i++){
		console.log(arr[i]);
	}
}

recorrerArreglo(coches);


var camionetas = ["Tiguan", "Explorer", "CRX7"];


recorrerArreglo(camionetas);


var coche = {
	nombre: "Golf",
	modelo: 2018,
	color: "Rojo",
	arrancar: function(){
		console.log("Run run " + this.nombre + "..............");
	}
};

coche.arrancar();


var cochesNuevo = [

	{
		nombre: "Mustang",
		modelo: 2008,
		costo: 120000,
		color: "Rojo"
	},
	{
		nombre: "Jetta",
		modelo: 2018,
		costo: 320000,
		color: "Negro"
	},
	{
		nombre: "Audi R8",
		modelo: 2010,
		costo: 500000,
		color: "Blanco"
	}

];


function recorrerAutos(autos){
	for(var i = 0; i < autos.length; i++){
		console.log(autos[i].nombre + " $" + Intl.NumberFormat().format(autos[i].costo));

	}
}

recorrerAutos(cochesNuevo);


function autosMayorPrecio(autos){

	var autoMayorPrecio = autos[0];

	for(var i = 0; i < autos.length ; i++){

		if(autos[i].costo > autoMayorPrecio.costo){
			autoMayorPrecio = autos[i];
		}

		

	}

	console.log("Autor Mayor Precio: " + autoMayorPrecio.nombre + " $" + Intl.NumberFormat().format(autoMayorPrecio.costo));
}


autosMayorPrecio(cochesNuevo);


function precioTotalCoches(autos){

	var total = 0;

	for(var i = 0; i < autos.length ; i++){

		total += autos[i].costo;

	}


	console.log("Precio Total: " + total);

	return total;

}

//document.getElementById("email-inicio").value = precioTotalCoches(cochesNuevo);

$("#email-inicio").val(precioTotalCoches(cochesNuevo));


