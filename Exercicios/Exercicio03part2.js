var nome = "Matheus"
var ida = 18
var temcarteira = true
console.log(`O ${nome} está autorizado a dirigir?: ${ida >= 18 && temcarteira == true}`)

var ida = 16
var chovendo = true
console.log(`O ${nome} está autorizado a ir para praia?: ${ida >= 18 || chovendo == false}`)

var ida = 18
var chovendo = false
console.log(`O ${nome} está autorizado a ir para praia?: ${ida >= 18 && chovendo == !false}`)
