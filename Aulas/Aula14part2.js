// Método addEventListener
let doc1 = document.querySelector('#evento')

const mudar1 = () => {
    doc1.style.color = 'white'
    doc1.style.backgroundColor = 'blue'
}

const mudar2 = () => {
    doc1.innerHTML = 'Texto'
    doc1.style.backgroundColor = 'orange'
}

const mudar3 = () => {
    doc1.innerHTML = 'Dois eventos'
    doc1.style.color = 'black'
    doc1.style.backgroundColor = 'white'
}

doc1.addEventListener('click', mudar2);
doc1.addEventListener('mouseenter', mudar1);
doc1.addEventListener('mouseleave', mudar3);
