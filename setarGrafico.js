function setarGraficoPotencia(){
	let divDinheiros = document.getElementById("grafico_Consumo_em_Dinheiros").style;
	let graficoPotencia = document.getElementById("grafico_Consumo_em_W").style;

	graficoPotencia.display = "block";
	divDinheiros.visibility = "hidden";
	
}

function setarGraficoConsumo(){
	let divDinheiros = document.getElementById("grafico_Consumo_em_Dinheiros").style;
	let graficoPotencia = document.getElementById("grafico_Consumo_em_W").style;
	
	divDinheiros.visibility = "visible";
	graficoPotencia.display = "none";

}