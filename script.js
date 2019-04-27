$(document).ready(function(){
    
    $('.icon').html('<img src="https://img.icons8.com/bubbles/100/000000/cash-in-hand.png"><p>Simule o parcelamento de suas contas e não caia numa fria.</p>');
    $('.parc').click(function(e){
        $('.icon').remove('img');
        $('.icon').html('<img src="https://img.icons8.com/bubbles/100/000000/cash-in-hand.png"><p>Simule o parcelamento de suas contas e não caia numa fria.</p>');
    });

    $('.cal').click(function(e){
        $('.icon').remove('img');
        $('.icon') .html('<img src="https://img.icons8.com/bubbles/100/000000/calculator.png"><p>Use a cabeça e a calculadora e planeje bem os seus investimentos.</p>');
    })
    $('.sor').click(function(e){
        $('.icon').remove('img');
        $('.icon') .html('<img src="https://img.icons8.com/clouds/100/000000/trophy.png"><p>Arrisque a sorte e não passe mais por apertos.</p>');
    });
    $('.about').click(function(e){
        $('.icon').remove('img');
        $('.icon').html('<img src="https://img.icons8.com/bubbles/100/000000/user.png"><p>Sobre mim.</>');
    })
});