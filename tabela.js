let table = document.getElementById("tabela");
let headersContent = `<th>${"Dispositivos"}</th>\n`;

//adicionar os disps como colunas
 for(let i = 0; i < dados.consumo.length; i++)
 	headersContent += `<th>${dados.consumo[i][0]}</th>\n`;
//colunas da tabela
let lineContent = "";
for(let disp = 1; disp < dados.dispositivos.length; disp++){
	lineContent += `<tr><td>${dados.dispositivos[disp]}</td>`;

	for(let dia = 0; dia < dados.consumo.length; dia++){
		lineContent += `<td>${dados.consumo[dia][disp]}</td>`;
	}

	lineContent += `</tr>`;
}
let tabHeaders = `<tr>${headersContent}</tr>`;

table.innerHTML = `${tabHeaders}\n${lineContent}`;