const precioPotisCraft = document.querySelector("#preciosPotisCraft");
const precioFrascos = document.querySelector("#preciosFrascos");
const precioPlantitas = document.querySelector("#preciosPlantitas");
const precioConver = document.querySelector("#preciosConver");
const precioPotis = document.querySelector("#preciosPotis");
const precioPotisTotal = document.querySelector("#preciosPotisCraftTotal");
const precioPotisCraftMultyMax = document.querySelector("#preciosPotisCraftMultiMax");
const precioPotisCraftMultyMin = document.querySelector("#preciosPotisCraftMultiMin");
const gananciaPromedioMultixCraft = document.querySelector("#gananciaPromedioMultixCraft");
const gananciaPromedioMultixCant = document.querySelector("#gananciaPromedioMultixCant");

const precioPotisx100 = document.querySelector("#preciosPotisX100")
const precioPotisx5 = document.querySelector("#preciosPotisX5")
const precioCaldero = document.querySelector("#preciosCaldero")


const calcularCraft = () => {
	console.log(precioConver.value)
	console.log(precioFrascos.value)
	console.log(precioPlantitas.value)
	const calculo = (parseFloat(precioConver.value) + parseFloat(precioFrascos.value)*5 + parseFloat(precioPlantitas.value)*3);

	console.log(calculo);
	precioPotisCraft.value = (calculo/5).toFixed(2);
	precioPotisTotal.value = (calculo).toFixed(2);
	precioPotisCraftMultyMax.value = (calculo*4).toFixed(2);
	precioPotisCraftMultyMin.value = (calculo*.4).toFixed(2);
	gananciaPromedioMultixCraft.value = ((parseFloat(precioPotisCraftMultyMax.value) + parseFloat(precioPotisCraftMultyMin.value))/2).toFixed(2)
	gananciaPromedioMultixCant.value = ((parseFloat(gananciaPromedioMultixCraft.value)*0.3)).toFixed(2)
}

const calcularCompra = () => {
	precioPotisx5.value = precioPotis.value*5
	precioPotisx100.value = precioPotis.value*100
	precioCaldero.value = precioPotis.value * 150 + precioPlantitas.value *20
}


// const leerLocalStorage = () => {
// 	if (localStorage.getItem("datosGuardados")) {
// 		precioConver.value = localStorage.getItem("precioConver")
// 		precioPotisCraft.value = localStorage.getItem("precioPotisCraft")
// 		precioFrascos.value = localStorage.getItem("precioFrascos")
// 		precioPlantitas.value = localStorage.getItem("precioPlantitas")
// 		precioPotis.value = localStorage.getItem("precioPotis")
// 		precioPotisTotal.value = localStorage.getItem("precioPotisTotal")
// 		precioPotisCraftMultyMax.value = localStorage.getItem("precioPotisCraftMultyMax")
// 		precioPotisCraftMultyMin.value = localStorage.getItem("precioPotisCraftMultyMin")
// 	} 
// }



// leerLocalStorage();
precioConver.addEventListener("change", calcularCraft)
precioFrascos.addEventListener("change", calcularCraft)
precioPlantitas.addEventListener("change", calcularCraft)
precioPotis.addEventListener("change", calcularCompra)



console.log(precioPotisTotal.value)