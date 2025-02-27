var cidade = "Curitiba";
var cidade2 = "Pinhais";

var cidades = ["Curitiba","Pinhais","Araucaria"];

cidades.push("colombro");


// remove curitiba
//cidades.shift();

//apaga pinhais
//cidades.splice(1, 1);

cidades[1] = "Piraquara";

console.log(cidades);

//loops - > repetição
var ini = 0;
var fin = cidades.length -1;

while (ini <= fin)
{
    console.log(cidades[ini]);
    ini = ini + 1;
}

for(var ini=0; ini <= fin ; ini = ini +1){
    console.log(cidades[ini]);
}

var ini = cidades.length -1;
var fin = 0;
for( var ini; ini >= fin; ini = ini - 1) {
    console.log(cidades[ini]);
}

var ini = cidades.length -1;
var fin = 0;
while (ini >= fin)
    {
            console.log(cidades[ini]);
            ini = ini - 1;

    }
    
var n1 = 2;
var n2 = 3;
var n3 = 8;

function soma (n1, n2){
    var resultado = n1 + n2 + n3;
    return resultado;
}

var val = soma(3,5);

console.log(val);




