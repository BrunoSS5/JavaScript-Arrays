const notas = [ 10, 9, 8, 7, 6];
// map também recebe uma função como parametro dentro dos parenteses.
const notasAtualizadas = notas.map( nota => nota == 10? nota : ++nota)

console.log(notasAtualizadas)