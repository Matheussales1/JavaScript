class Animal{
    constructor (Nome, Idade, Cor, Raca){
        this.Nome = Nome;
        this.Idade = Idade;
        this.Cor = Cor;
        this.Raca = Raca;
    }
}

class Carros{
    constructor (Modelo, Marca, Ano, Cor){
        this.Modelo = Modelo
        this.Marca = Marca
        this.Ano = Ano
        this.Cor = Cor
    }
}

let Cachorro1 = new Animal('Cleber', 9, 'Preto e Branco', 'Husky')
    console.log(`Animal Número 1 é um ${Cachorro1.Raca} com o nome de ${Cachorro1.Nome}, tem ${Cachorro1.Idade} anos, com a cor ${Cachorro1.Cor}`);

let Cachorro2 = new Animal('Wesley', 2, 'Preto', 'Pitbull')
    console.log(`Animal Número 2 é um ${Cachorro2.Raca} com o nome de ${Cachorro2.Nome}, tem ${Cachorro2.Idade} anos, com a cor ${Cachorro2.Cor}`);

let Cachorro3 = new Animal('Zeus', 5, 'Branco', 'Dogo-Argentino')
    console.log(`Animal Número 3 é um ${Cachorro3.Raca} com o nome de ${Cachorro3.Nome}, tem ${Cachorro3.Idade} anos, com a cor ${Cachorro3.Cor}`);


    console.log('-------------------------------------------------------------------------------------')


let Carro1 = new Carros('Continental-GT', 'Bently', 2013, 'Branco')
    console.log(`Carro 1\nModelo: ${Carro1.Modelo}\nMarca: ${Carro1.Marca}\nAno: ${Carro1.Ano}\nCor: ${Carro1.Cor}`)
    console.log('-------------------------------------------------------------------------------------');

let Carro2 = new Carros('Maverick GT', 'Ford', 1974, 'Branco com lista preta')
    console.log(`Carro 2\nModelo: ${Carro2.Modelo}\nMarca: ${Carro2.Marca}\nAno: ${Carro2.Ano}\nCor: ${Carro2.Cor}`)
    console.log('-------------------------------------------------------------------------------------');

let Carro3 = new Carros('WRX STI', 'Subaru', 2022, 'Azul')
    console.log(`Carro 3\nModelo: ${Carro3.Modelo}\nMarca: ${Carro3.Marca}\nAno: ${Carro3.Ano}\nCor: ${Carro3.Cor}`)
    console.log('-------------------------------------------------------------------------------------');
    