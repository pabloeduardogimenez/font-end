function fatorial(){

    var num = valor.value;    
  
    var fin = 1;
    
    var total =  1;  

    while (num >= fin)
        {       
           total = total * num;
           //total *= num;
           //num = num -1;
           num -= 1;           
    
        }
        console.log(total);
    
}
/*
5*1
5*2
5*3
5*4
*/

function tabuada(){
    var num = valor.value;
    /*var ini = 1;
    var fin = 10;
    var resultado;*/

   /*while (ini >= fin){
         resultado = num * ini;
         console.log(resultado);
         ini = ini - 1;
    }*/
    for (var ini = 1 ; ini <= 10 ; ini+= 1 )
    {
        var total = ini * num;
        console.log( num.value + " x " + ini + "=" + total );

    }
}

function notas(){
    var media = 0 ; 


    for (var ini = 1; ini <= 4 ; ini += 1){
        var notas = prompt("digiti a valor da nota" + ini );

        media += parseInt(notas);
      
    }
    media = media / 4;
    console.log("A média é " + media);

    if (media >= 4 && media <= 7 ){
        console.log("recuperação");
    } else if (media < 4 ){
        console.log("reprovado");
    } else if (media > 7 ){
        console.log("aprovado");
    }
}
//ini=+ 1
//Fibonacci
// 0 1  1  2 3 5 8 
// vai dizer numeros da sequencia 
// 8 
function fibo(){
    var num = valor.value; 
    if (num = 1){
        console.log( "fibonacci =  " +  num  );
        console.log(  "0" );        
    } else if ( um = 2){
        console.log( "fibonacci =  " +  num  );
        console.log(  "0" );
        console.log(  "1" );

    } else if (um > 2)
    {  
            var soma ;
            var numero1 = 1;
            var numero2 = 1;  
            console.log( "fibonacci =  " +  num  );
            console.log(  "0" );
            console.log(  "1" );
            console.log(  "1" );

            for (var ini = 1 ; ini <= num ; ini+= 1 )
            {
                
                soma = numero1 + numero2;
                numero2 = numero1;
                numero1 = soma;        

                console.log(  soma );

            }
    }

}
function fibo2(){
    var num = valor.value;
    var n1 = 0;
    var n2 = 1;
    if ( num >= 2 )
    {
    console.log(n1);
    console.log(n2);
    } else 
    if (num == 1){
        console.log(n1);
    }
    while (num >2){
        var n3 = n1 + n2;
        console.log(n3);
        n1 = n2;
        n2 = n3;
        num--;
    }
}
