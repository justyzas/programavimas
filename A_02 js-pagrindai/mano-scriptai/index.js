// camel-case
// Object with program specifications

function printReleaseDate() {
	console.log(this.releaseDate);
}

let programSpecsDocument = {
	name: "mano-scriptai",
	version: "1.0.0",
	totalDevelopers: 4,
	rating: 4.787465,
	releaseDate: "2024-09-15",
	developers: [
		{ name: "Jonas", role: "Frontend Developer", age: 18, gender: "F" },
		{ name: "Ona", role: "Backend Developer", age: 28, gender: "F" },
		{ name: "Petras", role: "Fullstack Developer", age: 35, gender: "M" },
		{ name: "Asta", role: "UI/UX Designer", age: 20, gender: "F" },
	],
	date: new Date("2024-06-15 00:00:00"),
	printReleaseDate: printReleaseDate,
};

// JSON - JavaScript Object Notation
let serializedJsonString = JSON.stringify(programSpecsDocument);
console.log(serializedJsonString);
console.log(programSpecsDocument.date.toLocaleString("lt-LT"));
console.log(programSpecsDocument);

programSpecsDocument.printReleaseDate();

programSpecsDocument.totalDevelopers %= 3;
// + Prie teksto reiškia teksto prijungimą pabaigoje
programSpecsDocument.name += "-updated";

let dev = programSpecsDocument.developers[0];

let arYra18 = dev.age >= 18;
let arYra20 = dev.age >= 20;
let arTetisLeido = true;
let arBernas = dev.gender == "M";

// IR operatorius
let arBernasIrYra20 = arBernas && arYra20;
let arMoterisIrYra18 = !arBernas && arYra18;
// Arba operatorius
let arGaliPirktAlaus = arBernasIrYra20 || arMoterisIrYra18;

if (arYra18 && !arYra20) {
	if (arTetisLeido) {
		console.log("Gali pirkt alaus su tėčio leidimu");
	} else {
		console.log("Eik paklausk tėčio");
	}
} else if (arGaliPirktAlaus) {
	console.log("Gali pirkt alaus");
} else {
	console.log("Suauk pagaliau");
}

// let i = 0;
// while (i < 5) {
// 	console.log(i);
// 	i++;
// }

// for (let i = 0; i < programSpecsDocument.developers.length; i++) {
// 	console.log(programSpecsDocument.developers[i].name);
// }

// for (let dev of programSpecsDocument.developers) {
// 	console.log(dev.name);
// }

// for (let index in programSpecsDocument.developers) {
// 	console.log(programSpecsDocument.developers[index].name);
// }

programSpecsDocument.developers.forEach(function (developer) {
	console.log(developer.name);
});
