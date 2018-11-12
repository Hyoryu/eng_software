//adicionar "Dispositivos" como a 1ª coluna da tabela
let tbConsumo_headersContent = `<th class="tb_potTH">${"Dispositivos"}</th>\n`;

//adicionar n dias como colunas da tabela
 for(let i = 0; i < dinheiros.length; i++)
 	tbConsumo_headersContent += `<th class="tb_potTH">${dinheiros[i][0]}</th>\n`;

/*
	Inserindo os dados a respeito de quanto cada dispositivo consumil, em reais, por dia registrado
*/

//valores das colunas da tabela (por linha)
let tbConsumo_lineContent = "";
for(let disp = 1; disp < dados.dispositivos.length; disp++){
	//inicio da linha: qual é o dispositivo
	tbConsumo_lineContent += `<tr class="tb_potTR"><td class="tb_potTD">${dados.dispositivos[disp]}</td>`;

	//valor consumido em reais do dispositivo por dia
	for(let dia = 0; dia < dinheiros.length; dia++){
		tbConsumo_lineContent += `<td class="tb_potTD">${dinheiros[dia][disp].toFixed(2)}</td>`;
	}
	//fechar a tag que inicia a linha
	tbConsumo_lineContent += `</tr>`;
}

let tabConsumo_Headers = `<tr>${tbConsumo_headersContent}</tr>`;

document.getElementById("tabelaConsumo").innerHTML = `${tabConsumo_Headers}\n${tbConsumo_lineContent}`;