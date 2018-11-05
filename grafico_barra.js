google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStuff);
            
const dadosTabela = [dados.dispositivos];
for(let i = 0; i < DIAS; i++)
    dadosTabela.push(dados.consumo[i]);
function drawStuff() {
    var button = document.getElementById('change-chart');
    var chartDiv = document.getElementById('chart_div');

    var data = google.visualization.arrayToDataTable(dadosTabela);
    var materialOptions = {
        width: 1500,
        chart: {
            title: 'Consumo de energia',
        },
        vAxis: {
            title: 'Potência (W)',
        }
    };
    function drawMaterialChart() {
        var materialChart = new google.charts.Bar(chartDiv);
        materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
    }
    
    drawMaterialChart();
};