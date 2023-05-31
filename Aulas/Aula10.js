let alunos = [
    'Matheus',
    'Dos',
    'Santos',
    'Sales',
    'Pessoa',
    'Pessoa2',
];

//// .forEach() = atribui a cada elementos de um array uma ação. 
// alunos.forEach((nome) => {
//     console.log(`Parabéns, ${nome}. Você foi aprovado"`);
// });


/* ORDEM DO FOREACH
* .forEach( VALOR = elementos do array, INDEX = posição no array, ARRAY = todos elementos do array)
*/ 

alunos.forEach((valor, index, array) => {
    console.log(`Parabéns, ${valor}. Você foi aprovado.\nNa posição: ${index}.\nNa chamada com: ${array}.`);
});
