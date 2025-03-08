$(document).ready(function(){
   $(".bt-add").click(
        function()
        {
            var nome = $("#nome").val();

            $("#lista").append('<li class="list-group-item">'+nome+'</li>');
        }); // fim bt-add 

       
        $(".bt-del").click(
            function()
            {
                var lista = $("#lista").val();
                var n = lista.indexOf + 1 ;
                
                $("#lista").splice(n, 1);
                $("#lista").append('<li class="list-group-item">'+ n +'</li>');
            }); // fim bt-del 
    
});
