//adicionar "Dispositivos" como a 1ª coluna da tabela
let tbPotencia_headersContent = `<th class="tb_potTH">${"Dispositivos"}</th>\n`;

//adicionar n dias como colunas da tabela
 for(let i = 0; i < dados.consumo.length; i++)
 	tbPotencia_headersContent += `<th class="tb_potTH">${dados.consumo[i][0]}</th>\n`;

/*
	Inserindo os dados a respeito de quanto cada dispositivo consumil, em reais, por dia registrado
*/

//valores das colunas da tabela (por linha)
let tbPotencia_lineContent = "";
for(let disp = 1; disp < dados.dispositivos.length; disp++){
	//inicio da linha: qual é o dispositivo		
	tbPotencia_lineContent += `<tr class="tb_potTR"><td class="tb_potTD">${dados.dispositivos[disp]}</td>`;

	//valor consumido de energia, em Watts, do dispositivo por dia registrado
	for(let dia = 0; dia < dados.consumo.length; dia++){
		tbPotencia_lineContent += `<td class="tb_potTD">${dados.consumo[dia][disp]}</td>`;
	}
	//fechar a tag que inicia a linha
	tbPotencia_lineContent += `</tr>`;
}

let tbPotencia_tabHeaders = `<tr>${tbPotencia_headersContent}</tr>`;

document.getElementById("tabelaPotencia").innerHTML = `${tbPotencia_tabHeaders}\n${tbPotencia_lineContent}`;