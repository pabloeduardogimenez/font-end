function soma(n1, n2){
    var resultado = n1 + n2;
    return resultado;
}
soma(2,3);

function oi(){            
    var  valor = texto.value;
    mensagem.innerText = valor;

}

function maiusculas(){            
    var  valor = texto.value;   
    mensagem.innerText =valor.toUpperCase();
}

function letra(){            
    var  valor = texto.value;
    var primeira = valor.charAt(0); 
    var resto = valor.substring(1,);  
    mensagem.innerText = primeira.toUpperCase() + resto.toLowerCase();
}

function far2celcius(){
    var Far =   texto.value;
    var resultado = (5 * (Far-32) / 9);
    mensagem.innerText =resultado;
}

function somar(){
    mensagem.innerText = "0";
    var result = parseInt(num1.value) + parseInt(num2.value);
    mensagem.innerText = result;
    
}

function sub(){
    mensagem.innerText = "0";
    var result = parseInt(num1.value) - parseInt(num2.value);
    mensagem.innerText = result;    
}

function div(){
    mensagem.innerText = "0";
    if (parseInt(num2.value) == 0){
        alert(" Não possivél dividir por zero");
    } else {
    var result = parseInt(num1.value) / parseInt(num2.value);
    mensagem.innerText = result;
    }
      
}

function mult(){
    mensagem.innerText = "0";
    var result = parseInt(num1.value) * parseInt(num2.value);
    mensagem.innerText = result;    
}

function par(){
    var  valor = parseInt(text.value);
    if ((valor % 2) == 0){
        mensagem.innerText = "Par";
    } else {
        mensagem.innerText = "Impar";
    }
}

function vogal(){

    // ou -> ||
    // e -> &&

    var valor = valor.text;
    var a = "a";
    var e = "e";
    var i = "i";
    var u = "u";
    var oi = "o";

    if ( valor == "a" || valor == "e" || valor == "i" || valor == "o" || valor == "u") {
        mensagem.innerText = "vogal";
    }  
    else
    {
        mensagem.innerText = "Consoante";
    }  

}