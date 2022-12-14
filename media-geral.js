/* AULA 05 - VIDEO 02 - ARQUIVO: media-geral.js

Metodo .reduce() para Soma Elementos de uma Array.

 o reduce comprime uma array somando os elementos dentro dela, um-a-um, para apenas um unico valor, o 0 seguifica o valor inicial do elemento. acum e atual são parametros da arrow function, podemos passar qualquer nome a eles.
 O primeiro parametro é um acumulador, vai acomular as notas de cada elemento, o segundo parametro será o valor atual, após cada loop será feita a soma atual + acum.
*/
const salaJS = [ 7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [ 6, 5, 8, 9, 5, 6];
const salaPython = [ 7, 3.5, 8, 9.5];


function mediaSala( notaDaSala){
    const somaDasNotas = notaDaSala.reduce((acum, atual) => atual + acum,0)
    return somaDasNotas/notaDaSala.length
}

console.log( `Média da Sala de JavaScript: ${ mediaSala(salaJS)}`)
console.log( `Média da Sala de Java: ${ mediaSala(salaJava)}`)
console.log( `Média da Sala de Python: ${ mediaSala(salaPython)}`)
/* SAIDAS:
"Média da Sala de JavaScript: 7.5
Média da Sala de Java: 6.5
Média da Sala de Python: 7"
*/