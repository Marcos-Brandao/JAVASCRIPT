// let nome = "João";
// let idade = 5;

// var estudante = true;

// console.log(nome, idade, estudante);

let frutas = ["Maça", "Manga", "Banana"];
// console.log(frutas);
// frutas.push("Uva");
// console.log(frutas);
// console.log(frutas[1]);
// frutas.pop();

// let alunos = [
//    ["Ana", 8.5, 7.5, 9.0],
//    ["João", 6.0, 8.0, 7.0],
//    ["Maria", 6.0, 8.0, 7.0]   
// ];

// console.log(alunos);

// let nota = 50;

// if (nota >= 90){
//     console.log("Aluno aprovado com sucesso!");
// } else if (nota >= 60){
//     console.log("Aluno aprovado!");
    
// } else {
//     console.log("Aluno reprovado!");

// };


// let dia = 4;

// switch (dia) {
//     case 1:
//         console.log("Domingo");
//         break;
//     case 2:
//         console.log("Segunda");
//         break;
//     case 3:
//         console.log("Terça");  
//         break;
//     case 4:
//         console.log("Quarta");
//         break;
        
//     default:
//         console.log("Dia invalido");
        
// };

// let mensagem = idade >= 18 ? "Você é maior de idade." : "Você é menor de idade.";
// console.log(mensagem);


// Funções 

function operacoes(n1, n2){
   let soma = n1 + n2;
   let sub = n1 - n2;
   let mult = n1 * n2;
   let div = n1 / n2;
     return console.log(`Soma é ${soma}, subtração ${sub} multiplicação ${mult} e divisão ${div}`)
}

let resultado = operacoes(3, 6);

let cont = 1;

while (cont < 1){
    console.log(`contagem ${cont}`)
    cont++;
}

do{
    console.log(`contagem ${cont}`)
    cont++;
} while ( cont < 1);

// for(let num = 1; num <= 10; num++){

//     console.log(`Tabuada do ${num}: `);
//     for(let i = 1 ; i <= 10; i++){
//         console.log(`${num} X ${i} = ${num * i}`);
        
//     }
// }


frutas.forEach(function(frutas, indice){console.log(`Fruta: ${indice + 1}: ${frutas}`)})
