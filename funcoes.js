function validarPalavra() {
    var letra1 = quadrado1.value
    if(letra1 == 'A') {
        document.getElementById('quadrado1').style.backgroundColor = 'green'
    } else if(letra1 == '') {
        document.getElementById('quadrado1').style.backgroundColor = 'white'
    } else {
        document.getElementById('quadrado1').style.backgroundColor = 'red'
    }

    var letra2 = quadrado2.value
    if(letra2 == 'D') {
        document.getElementById('quadrado2').style.backgroundColor = 'green'
    } else if(letra2 == '') {
        document.getElementById('quadrado2').style.backgroundColor = 'white'
    } else {
        document.getElementById('quadrado2').style.backgroundColor = 'red'
    }
}

