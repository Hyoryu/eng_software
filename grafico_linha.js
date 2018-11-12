google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    function grafico_Consumo_W(){
        var data = new google.visualization.DataTable();

        for(let i = 0; i < DISPOSITIVOS+1; i++)
            data.addColumn('number', dados.dispositivos[i]);
        
        let dadosGrafico = [];

        for(let i = 0; i < DIAS; i++)
            dadosGrafico.push(dados.consumo[i]);

        data.addRows(dadosGrafico);
        
        var options = {
            chart: {title: 'Consumo de energia em Watts'},
            titleTextStyle: { color: '#FFFFFF' },
            width: 1200,
            vAxis: {
                title: 'Potência (W)',
                textStyle: {
                    color: "#FFFFFF"
                },
            },
            hAxis:{
                textStyle: {
                    color: "#FFFFFF"
                }
            },
            backgroundColor: '#333333' 
        };
        var chart = new google.charts.Line(document.getElementById('Consumo_W'));
        chart.draw(data, google.charts.Line.convertOptions(options));
    }
    function grafico_Consumo_R$(){
        let data1 = new google.visualization.DataTable();
        for(let i = 0; i < DISPOSITIVOS+1; i++)
            data1.addColumn('number', dados.dispositivos[i]);
            
        let dadosGrafico = [];

        for(let i = 0; i < DIAS; i++)
            dadosGrafico.push(dinheiros[i]);

        data1.addRows(dadosGrafico);
            
        let options = {
            chart: {title: 'Consumo de energia em R$'},
            titleTextStyle: { color: '#FFFFFF' },
            width: 1000,
            vAxis: {
                title: 'Custo R$',
                textStyle: {
                    color: "#FFFFFF"
                },
            },
            hAxis:{
                textStyle: {
                    color: "#FFFFFF"
                }
            },
            backgroundColor: '#333333'
        };
        let CustoDinheiros = new google.charts.Line(document.getElementById('Consumo_Reais'));
        CustoDinheiros.draw(data1, google.charts.Line.convertOptions(options));
    }
    grafico_Consumo_W();
    grafico_Consumo_R$();
}