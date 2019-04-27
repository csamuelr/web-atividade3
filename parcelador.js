$(document).ready(function(){
    $('.resultado').fadeOut(0);

    $('#calc_parcelas').click(function(e){
        e.preventDefault();

        var valor_inicial = $('#val').val();
        var parcelas      = $('#parcela').val();
        var juros         = 0;

        var valor;

        valor_inicial = parseFloat(valor_inicial);
        parcelas = parseFloat(parcelas);


        if(parcelas > 5){
            alert('O parcelamento em mais de 5 vezes tem acrescido ao seu valor juros de 10%.');
            juros = (valor_inicial * 0.10);
            valor = valor_inicial + juros;            
        }
        else{
            valor = valor_inicial
        }

        var valor_parcela = Number(valor/parcelas).toFixed(2);

        $('.resultado').fadeIn('slow');

        tab = '<tr>' + '<th>Valor</th>' + '<th>Juro</th>' + '<th>Valor Final</th>' + '</th>';
        
        $('#thead-info').html(tab);

        tab = '<td>' + valor_inicial + '</td>' + '<td>' + juros + '</td>' + '<td>' + valor + '</td>'

        $('#tbody-info').html(tab);

        var html = '<tr>';

        for (var i = 0; i < parcelas; i++) {
            html = html + '<th>Parcela ' + (i + 1) + ' </th>\n';
        }

        html = html + ' </tr>';

        $('#thead').html(html);

        html = '<tr>';

        for (var i = 0; i < parcelas; i++) {
            html = html + '<td> ' + valor_parcela + ' </td>\n';
        }

        html = html + '</tr>';

        $('#tbody').html(html);
    });
})

