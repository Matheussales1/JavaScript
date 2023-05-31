// Function
function imc (peso, altura) {
    return peso / (altura * altura)
}

console.log(imc(63, 1.70).toFixed(2));


// Arrow Function
const IMC2 = (peso, altura) => {
    return peso / (altura * altura)
}
console.log(IMC2(63, 1.70).toFixed(2));
