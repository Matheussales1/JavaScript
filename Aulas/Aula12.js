// document.title = 'Number'

// console.log(document.URL);
// console.log(document.head);

let paragrafo = document.createElement('p');

paragrafo.innerHTML = 'lorem de 10mil';

document.body.appendChild(paragrafo);


let subt = document.createElement('button');

subt.innerHTML = 'enviar';

document.body.appendChild(subt);
