let frutas = ['Uva', 'Limão', 'k9']
//Removi o ultimo conteudo da array e salvei em uma variavel
let removido = frutas.pop();
console.log(frutas);

//Adicionei de volta o conteudo pro array
frutas.push(removido);
console.log(frutas);


let sala = ['eu', 'alguem', 'outro alguem']
// Remover o primeiro conteudo do array
let tirado = sala.shift();
console.log(sala)

//Adicionar um conteudo no começo do array
sala.unshift('Eu')
console.log(sala)

// Transforma o conteudo do array em string
console.log(sala.toString())
console.log(sala.join(' - '))