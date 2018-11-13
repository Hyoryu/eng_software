 /*	preço do kW/H -> tarifa convencional (sem aplicação de bandeira)
 	foi considerao o preço da classe B1 - Residencial 
 	e a Tarifa de Energia TE

 	Data: 11/11/2018
 */
const valor_kW_H = 0.27087;


//Cria um valor aleatório de dispositivos
function geraDispositivos(qtdDispositivos){
	let dados = ["Dia"];
	for(let i = 1; i <= qtdDispositivos; i++)
		dados.push(`Disp ${i}`);
	return dados;
}

/*
	Essa função simula o consumo de energia dos dispositos que serão monitorados pelo 
	nosso produto.
	Essa função gera uma matriz com o seguinte formato:
		linha  = quantidade de dias registrados
		coluna =  quantidade de dispositivos monitorados + 1 (referência do dia)
*/
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

const RANGE = Math.floor(Math.random() *(1000 - 20) + 20);
const DISPOSITIVOS = Math.floor(Math.random() * 4 + 2);
const DIAS = Math.floor(Math.random() * (20 - 2) + 2);

/*	objeto usado para passar as informações para gerar os gráficos e as tabelas
	No produto final, seria recebido o mesmo JSON, mas com as informações
	inseridas pelo cliente + as geradas pelo sistema de monitoramento
*/
const dados = {
	dispositivos: geraDispositivos(DISPOSITIVOS),
	consumo: geraDados(DIAS, RANGE, DISPOSITIVOS)
};

//gera as informações de kW/h dos dispositivos 
let dinheiros = [];
let aux;
let auxCalculo;
 for(let i = 0; i < DIAS; i++){
 	aux = [];
 	aux.push(dados.consumo[i][0]);
 	for(let j = 1; j <dados.consumo[i].length; j++){
 		//o tempo em que o dispositivo está funfando também será um valor aleatório que vai de 10 min (0.16667) até 24h por dia:
 		auxCalculo = (dados.consumo[i][j]/1000) * (Math.random() * 24 + 0.16667) * valor_kW_H;
 		aux.push( auxCalculo );
	}
	dinheiros.push(aux);
}

console.log(dinheiros);