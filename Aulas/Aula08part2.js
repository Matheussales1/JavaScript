// Objeto dentro de uma rray

let tarefas = [
    {
        taref0: 'Fazer',
        desc0: 'algo',
        fim0: false,
    },

    {
        taref1: 'já fiz',
        desc1: 'outro algo',
        fim1: true,
    },

    {
        taref2: 'não vou fazer', 
        desc2: 'não irei',
        fim2: false, 
    }
]

console.log(`Atividade ${tarefas[0].desc0}\nFoi terminada? ${tarefas[0].fim0}`);

// Transaformando as linhas de codigos em texto com JSON.STRINGIFY 
let text = JSON.stringify(tarefas)
console.log(text)

// Transformando o JSON em linhas de codigos
let  valorobj = JSON.parse(text)
console.log(valorobj)