$(document).ready(function(){
    var dados = ["Pedro", "Ana" , "Maria"];

   function imprimir(){ 

    $("#lista").empty(); // limpa a lista
    dados.forEach(function(item, idx){
        $("#lista").append('<li class="list-group-item  d-flex justify-content-between">'
            + item +
             '<button idx="'+idx+'" class="btn btn-danger bt-del">deletar</button> </li>');

    });
    };
    imprimir();

    $(".bt-add").click(function()
    {
        var nome = $("#nome").val();
        if (dados.includes(nome)== true){
            alert("nome já cadastro");
        }
        else
        {
            dados.push(nome);
            imprimir();
        }
     
      
  
    }); // fim bt-add
    $(".bt-ord").click(function(){
        dados.sort();
        imprimir();
    });
    //monitoramento
    $("#lista").on("click", ".bt-del", function(){
        var idx = $(this).attr("idx");
        console.log(idx);
        dados.includes(idx,1); 

    });

    $(".bt-del").click(function(){
        var idx = $(this).attr("idx");
        console.log(idx);
        dados.includes(idx,1); 
    });
});