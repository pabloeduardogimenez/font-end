function mudar()
{
    var cor = $("#cor").val();
    $(".titulo").css("color", cor);
}


function add()
{   
  
    var cidade = $("#cidade").val();
    var primeira  = cidade.charAt(0);
    var resto = cidade.Substring(1,0);
    var novacidade = primeira.toUpperCase() + resto.toLowerCase();   

    if ( $("#lista").html.includes(cidade) == true )
    {
       alert("cidade já cadastrade");
    }
    else {
        $("#lista").append("<li>" + cidade + "</li>");    }
   
    $("#cidade").val(""); 

}

$(document).ready(function(){

    // adicionando evento
    $(".bt-add").click(add);

    $(".titulo").css("color", "red");

    $("h1" , "li").clik(function(){
        var nova = $("#cor").val();
        $(this).css("color", nova);
    });


});
