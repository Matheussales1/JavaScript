const CalcularMedia = () => {
    let nt01 = Number(document.getElementById('nota01').value)
    let nt02 = Number(document.getElementById('nota02').value)
    let media = (nt01 + nt02) / 2

    let resu = document.getElementById('resultado')
    resu.innerHTML = `Sua média é: ${media}`
}