// let Qi = 100
// let CQI = Qi == 1000 ? 'Sabe um pouco' : 'Burro'
// console.log(CQI);

// Parte 2

let roupas = Number(prompt(`Escolha a cor do vestido.\nVermelho(1), Azul(2), Laranja(3)`))

switch(roupas){
    case 1:
        alert("Vestido vermelho");
        break;
        
    case 2:
        alert("Vestido azul")
        break;

    case 3: 
        alert("Vestido laranja")
        break;

    default:
        alert("Não achamos essa cor")
}
