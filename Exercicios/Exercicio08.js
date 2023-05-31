let veiculo = {
    nome: 'GT-R R34',
    marca: 'Nissan',
    cor: 'Cinza',
    ano: 1964, 
}

let veiculo2 = {
    nome2: 'hb30',
    marca2: 'AAAAAA',
    cor2: 'Vrumm',
    ano2: 2056, 
}

let veiculo3 = {
    nome3: 'Irarref',
    marca3: 'lamborguine',
    cor3: 'Roxa',
    ano3: 2900, 
}

let veiculo4 = {
    nome4: 'Subaru',
    marca4: 'Japones',
    cor4: 'Branco-Escuro',
    ano4: 2000, 
}

let{
    nome,
    marca,
    cor,
    ano,
} = veiculo

let{
    nome2,
    marca2,
    cor2,
    ano2,
} = veiculo2
let{
    nome3,
    marca3,
    cor3,
    ano3,
} = veiculo3
let{
    nome4,
    marca4,
    cor4,
    ano4,
} = veiculo4

//Carro1
if(ano <= 2000){
    console.log('Não paga')
} else{
    console.log('Paga')
}

console.log(`Veiculo1 -\nNome: ${nome}\nMarca: ${marca}\nCor: ${cor}\nAno: ${ano}\nIPVA: ${ipva}`)
console.log('---------')
console.log(`Veiculo2 -\nNome: ${nome2}\nMarca: ${marca2}\nCor: ${cor2}\nAno: ${ano2}\nIPVA: ${ipva}`)
console.log('---------')
console.log(`Veiculo3 -\nNome: ${nome3}\nMarca: ${marca3}\nCor: ${cor3}\nAno: ${ano3}\nIPVA: ${ipva}`)
console.log('---------')
console.log(`Veiculo4 -\nNome: ${nome4}\nMarca: ${marca4}\nCor: ${cor4}\nAno: ${ano4}\nIPVA: ${ipva}`)
console.log('---------')
