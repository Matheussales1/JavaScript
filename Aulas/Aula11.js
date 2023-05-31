// Class = É um template/Modelo de um objeto
class Pessoa {
    constructor (Nome, Sobrenome, Idade){
        this.Nome = Nome;
        this.Sobrenome = Sobrenome;
        this.Idade = Idade;
    }
}

let Matheus = new Pessoa('Matheus', 'Sales', 18)
let Ninguem = new Pessoa('Alguem', 'ninguem', 00)

console.log(Matheus.Nome);

