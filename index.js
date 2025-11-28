let megstamosPrekes = [];

function parodytiIvestaReiksme() {
	let ivestiesLaukelis = document.querySelector("#megstamos-prekes-ivestis");
	let reiksme = ivestiesLaukelis.value;
	let sarasas = document.querySelector("#megstamos-prekes");
	megstamosPrekes.push(reiksme);
	sarasas.innerHTML = sarasas.innerHTML + "<li>" + reiksme + "</li>";
	// console.log(megstamosPrekes[1]);
}
