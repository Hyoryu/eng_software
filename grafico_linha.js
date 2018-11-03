google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = new google.visualization.DataTable();

    for(let i = 0; i < DISPOSITIVOS+1; i++)
        data.addColumn('number', dados.dispositivos[i]);
    
    let dadosGrafico = [];

    for(let i = 0; i < DIAS; i++)
        dadosGrafico.push(dados.consumo[i]);

    data.addRows(dadosGrafico);
    
    var options = {
        chart: {title: 'Consumo de energia'},
        width: 1200,
        vAxis: {title: 'Potência (W)'}
    };
    var chart = new google.charts.Line(document.getElementById('linechart_material'));
    chart.draw(data, google.charts.Line.convertOptions(options));
}