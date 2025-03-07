$(document).ready(function(){

    $("#bt-cadastrar").click(function(){
        var nome = $("#nome").val()
        var telefone = $("#telefone").val()
        var email = $("#email").val()
        var cidade = $("#cidade").val()
        var estado = $("#estado").val()
        var sexo = $(["name=sexo"].checked).val();
     

        $("input, select").removeClass("is-invalid")  

        var regex_fone = /^\([0-9]{2}\)[9]{1}[0-9]{3,4}-[0-9]{4}$/gm;

        var  regex_email = /^[a-z0-9._\-]+@[a-z0-9.]+$/gm;
        
        if(nome.trim().length <= 2) {
            $("#nome").addClass("is-invalid")            
        }
        if(telefone == "" || regex_fone.test(telefone) == false ){
            $("#telefone").addClass("is-invalid")
        } 
        if(cidade.trim() == ""){
            $("#cidade").addClass("is-invalid")
        } 
        if(email == "" || regex_email.test(email) == false){
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
        if ( 
            ev.keyCode == 8 ||  //backspace       
            ev.keyCode == 16 || //shift
            ev.keyCode == 32 || //  espaço
            ev.keyCode == 109 || // traço
            ev.keyCode >= 35 && ev.keyCode <= 40 ||
            ev.keyCode == 46 ||
            ev.keyCode >=  48 && ev.keyCode <= 57 ||
            ev.keyCode >=  97 && ev.keyCode <= 105 
         ) {
            return true;                        
        } else {
            return false; 
        }
             
        
    })

});