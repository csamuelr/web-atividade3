
$(document).ready(function(){
    $('.sorteados').fadeOut(0);
    $('.novo_jogo').fadeOut(0);
    $('.sortear').fadeOut(0);

    valores = new Array();
    sorteado = new Array();

    $('.jogar').click(function(e){
        e.preventDefault();       
        $('.valores').each(function(i){
           valores[i] = parseInt($(this).val());
           $(this).prop("disabled", true);
        });

        $('.valores').each(function(i){
            valores.sort(function(a,b){
                return a-b;
            });
            $(this).val(valores[i]);
        })

        $('.sortear').slideDown();
        $('.jogar').prop("disabled", true);           
    });

    $('.novo_jogo').click(function(e){
        e.preventDefault();
        $('.sorteados').slideUp();
        $('.valores').each(function(i){
            $(this).prop("disabled", false);
            $(this).val('');
        });
        
        $('.novo_jogo').slideUp();
        $('.sortear').slideUp();
        $('.jogar').slideDown();
        $('.jogar').prop("disabled", false)
        $('.sortear').prop("disabled", false)
    });

    $('.sortear').click(function(e){
        e.preventDefault();

        $('.sorteados').slideDown();
        $(function(){
            for(var i = 0; i < 6; i++){
                sorteado[i] = (Math.floor(Math.random() * 60) + 1);
            }
        });

        $(function(){
            valores.sort(function(a,b){
                return a-b;
            });
            sorteado.sort(function(a,b){
                return a-b;
            });                
        });  

        $('.val_sorteado').each(function(i){         

            $(this).val(sorteado[i]);
            if (valores[i] == sorteado[i]){            
                $(this).css({'background-color': 'lightgreen', 'color':'black'})
            }
            else{
                $(this).css({'background-color': 'palegoldenrod', 'color':'black'})
            }
        });

        $('.novo_jogo').slideDown();
    });      
});