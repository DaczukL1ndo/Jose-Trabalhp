//Tipo Dado
//booleanos
//conversão implicita

const numero = 456;
const numerostring = "456";

console.log(numero === numerostring);

//conversão implicita
// acontece quando o javascript converte o numero em string e depois compara as 2 strings

console.log(numero == numerostring);
console.log(numero + numerostring);

//conversão explicita
//number

let novonunumero = Number(numerostring);
console.log(numero + novonumero);

//string