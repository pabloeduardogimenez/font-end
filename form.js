$(document).ready(function(){

    $("#bt-cadastrar").click(function(){
        var nome = $("#nome").val()
        var telefone = $("#telefone").val()
        var email = $("#email").val()
        var cidade = $("#cidade").val()
        var estado = $("#estado").val()
        var sexo = $(["name=sexo"].checked).val();
     

        $("input, select").removeClass("is-invalid")  
        
        if(nome.trim().length <= 2) {
            $("#nome").addClass("is-invalid")            
        }
        if(telefone.trim().length = 11 ){
            $("#telefone").addClass("is-invalid")
        } 
        if(cidade.trim() == ""){
            $("#cidade").addClass("is-invalid")
        } 
        if(email.trim() == ""){
            $("#email").addClass("is-invalid")
        }   
        if(estado == "Selecione"){
            $("#estado").addClass("is-invalid")
        } 
        if(sexo == undefiend){
            $("[name-sexo]").addClass("is-invalid")
        } 
    });
    $("#telefone").keydown(function(ev) {

        console.log(ev);
        if ( ev.keyCode <  48 || ev.key > 57  ){
            return false;                        
        }
             
        
    })

});