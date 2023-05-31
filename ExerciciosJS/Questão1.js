/* 1 - Dado o array numbers = [1, 2, 3, 4, 5], utilize o método map para criar 
um novo array contendo o dobro de cada elemento.*/

let numbers = [
{
    number: 1
},
{
    number: 2
},
{
    number: 3
},
{
    number: 4
},
{
    number: 5
}
]

let dobro = numbers.map((num) => num.number * 2)

console.log(dobro);
