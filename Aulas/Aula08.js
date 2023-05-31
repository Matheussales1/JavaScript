let usuario = {
    nome: 'Matheus',
    sobrenome: 'Sales',
    idade: 18,
    endereco: {
        Bairro: 'Algum aí',
        N: 40228922,
    },
};

console.log(usuario.endereco)
console.log(usuario.endereco.Bairro)

const{
    nome,
    sobrenome,
    idade,
    endereco, 
    Bairro,
    N
} = usuario

console.log(`Usuario ${nome}, tem idade de: ${idade} anos.`);