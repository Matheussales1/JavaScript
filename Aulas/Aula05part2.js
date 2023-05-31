let dinheiro = 14

while (dinheiro < 500){
    console.log(`Ainda não pode comprar.\nVocê tem:${dinheiro}`)
    dinheiro += 100
}   

console.log(`Agora pode comprar.\nVocê tem:${dinheiro}`)

let num = 0

do {
    console.log(num);
    num += 1
} while (num <= 10);