$(document).ready(function(){

    $("#bt-cadastrar").click(function(){
        var nome = $("#nome").val()
        if(nome == ""){
            $("#nome").addClass("is.invalid")
            
        }    
    });

    $("#bt-cadastrar").click(function(){
        var telefone = $("#telefone").val()
        if(telefone == ""){
            alert("O campo telefone é obrigatŕio");
        }    
    });

    $("#bt-cadastrar").click(function(){
        var email = $("#email").val()
        if(email == ""){
            alert("O campo email é obrigatŕio");
        }    
    });

    $("#bt-cadastrar").click(function(){
        var cidade = $("#cidade").val()
        if(cidade == ""){
            alert("O campo cidade é obrigatŕio");
        }    
    });

});