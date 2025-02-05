

function soma(valor_1, valor_2, callback){
    var resultado = valor_1 + valor_2;

    callback(resultado);
}

// soma(1, 4, function(result){
//     console.log(result)
// });

// soma(3, 4, (result) => {
//     document.write(result)
// });

// soma(17, 14, printMensagem)

function printMensagem(msg){
    document.write("<br>O valor é: " + msg)
}
 

var array = ["Ruan", 4, false, "Gabriel", 'Milk', 0, "Maseratti"];
var object = {
    nome        : "Zerru Mario",
    idade       : 65,
    profissao   : "Covêru del futúru",
    estado_civil: "viúvo",
    nascimento  : "30-02-3029"
};
var rep = -1;
var i = 0;
let while_val = 0;
while (i <= rep) {
    i++;
    while_val = i;
    
};
// console.log("valor while: " + while_val)

i = 0;
let do_while_val = 0;
do {
    i++;
    do_while_val = i;
    
} while (i <= rep);
// console.log("valor do while: " + do_while_val)

let valor_for = 0;
for (let index = 0; index <= rep; index++) {
    
    valor_for = index;
};
// console.log("valor for: " + valor_for);

//for in - objeto
//for of - array 

for (let chave in object) {
    // console.log(chave);
    // console.log(object[chave]);
};

for (let chave in array) {
    // console.log(chave);
    // console.log(array[chave]);
};

for (let valor of array) {
    // console.log(valor);
    
};

array.forEach((valor, index) => {
    console.log(valor);
});

console.log(array.length)

