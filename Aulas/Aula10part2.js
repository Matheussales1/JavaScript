let produtos = [
    {
        prod: 'celular',
        valor: 1500,
    },
    {
        prod: 'PC',
        valor: 3000,
    },
    {
        prod: 'Xbox',
        valor: 4300,
    }
]

let precototal = produtos.map((vp) => vp.valor * 1.05)

console.log(`Valor final do produto: ${precototal}`);