function geraDados(qtdDias, rangeConsumo, qtdDispositivos){
	let consumo = [];
	let aux;
	for(let dia = 1; dia <= qtdDias; dia++){
		aux = [];
		aux.push(dia);
		for(let j = 0; j < qtdDispositivos; j++)
			aux.push( Math.floor(Math.random()*(rangeConsumo-50) + 50));
		consumo.push(aux);
	}

	return consumo;
}

function geraDispositivos(qtdDispositivos){
	let dados = ["Dia"];
	for(let i = 1; i <= qtdDispositivos; i++)
		dados.push(`Disp ${i}`);
	return dados;
}

const RANGE = Math.floor(Math.random() *(1000 - 20) + 20);
const DISPOSITIVOS = Math.floor(Math.random() * (8 - 2) + 2);
const DIAS = Math.floor(Math.random() * (20 - 2) + 2);

const dados = {
	dispositivos: geraDispositivos(DISPOSITIVOS),
	consumo: geraDados(DIAS, RANGE, DISPOSITIVOS)
}

console.log(dados.consumo);