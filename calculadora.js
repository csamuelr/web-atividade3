$(document).ready(function(){
    var output = '';
    $('.notificacao').fadeOut(0);

    $('.botao').click(function(e){
        e.preventDefault();
        output = output + $(this).val();
        $('.visor').val(output);
    });

    $('.botaoi').click(function(e){
        e.preventDefault();

        try{
            output = Number(eval(output)).toFixed(4);
        }
        catch (e){
            $('.notificacao').slideDown();
            $('.notificacao').text(e);
            $('.notificacao').fadeOut(5000);
        }  
        
        $('.visor').val(output);
    });

    $('.botaoc').click(function(e){
        e.preventDefault();
        output = '';
        $('.visor').slideUp(500).slideDown(500);
        $('.visor').val('');
    });

    $('.botaos').click(function(e){
        e.preventDefault();

        try{
            output = Number(Math.sqrt(eval(output))).toFixed(4);
            $('.visor').val(output);
            output = '';
        }catch (e){
            alert(e);
            output = '';
        }
            
    });
});