// O .querySelector() só puxa somente o primeiro elemento encontrado.
let par1 = (document.querySelector('#corr').style.color = "blue");
// par1.style.color = "blue";

const clique = () => {
   document.querySelector('#mudar').style.backgroundColor = 'red';
}

// O .querySelectorAll() puxa todos os elementos encontrados.
let ItensLista = document.querySelectorAll('#lista01')

for (let i = 0; i <= ItensLista.length ; i++){
   ItensLista[i].style.color = 'silver'
}


// Método addEventListener
const Click = () => {
    document.querySelectorAll('#evento')
    evento.style.color = 'silver'
}