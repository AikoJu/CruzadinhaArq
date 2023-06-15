function validarPalavra() {

    // Palavra 1
    var letra2 = quadrado2.value
    var letra3 = quadrado3.value
    var letra4 = quadrado4.value

    if(letra2.toUpperCase() == 'C' && letra3.toUpperCase() == 'P' && letra4.toUpperCase() == 'U') {
        document.getElementById('quadrado2').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado3').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado4').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('imagemAcerto1').src = "carne.png"

    } else if(letra2 == '' && letra3 == '' && letra4 == '') {
        document.getElementById('quadrado2').style.backgroundColor = 'white'
        document.getElementById('quadrado3').style.backgroundColor = 'white'
        document.getElementById('quadrado4').style.backgroundColor = 'white'
        document.getElementById('imagemAcerto1').src = "vaca.png"
    } else {
        document.getElementById('quadrado2').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado3').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado4').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('imagemAcerto1').src = "vaca.png"
    }

    // Palavra 2
    var letra64 = quadrado64.value
    var letra65 = quadrado65.value
    var letra66 = quadrado66.value

    if(letra64.toUpperCase() == 'U' && letra65.toUpperCase() == 'L' && letra66.toUpperCase() == 'A') {
        document.getElementById('quadrado64').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado65').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado66').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('imagemAcerto2').src = "carne.png"

    } else if(letra64 == '' && letra65 == '' && letra66 == '') {
        document.getElementById('quadrado64').style.backgroundColor = 'white'
        document.getElementById('quadrado65').style.backgroundColor = 'white'
        document.getElementById('quadrado66').style.backgroundColor = 'white'
        document.getElementById('imagemAcerto2').src = "vaca.png"
    } else {
        document.getElementById('quadrado64').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado65').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado66').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('imagemAcerto2').src = "vaca.png"
    }

    // Palavra 3

    var letra36 = quadrado36.value
    var letra37 = quadrado37.value
    var letra40 = quadrado40.value
    var letra51 = quadrado51.value
    var letra55 = quadrado55.value
    var letra62 = quadrado62.value
    var letra68 = quadrado68.value
    var letra74 = quadrado74.value
    var letra85 = quadrado85.value
    var letra87 = quadrado87.value
    var letra89 = quadrado89.value
    var letra91 = quadrado91.value
    var letra93 = quadrado93.value

    if(letra36.toUpperCase() == 'R' && letra37.toUpperCase() == 'E' && letra40.toUpperCase() == 'G' && letra51.toUpperCase() == 'I' 
    && letra55.toUpperCase() == 'S' && letra62.toUpperCase() == 'T' && letra68.toUpperCase() == 'R' && letra74.toUpperCase() == 'A' 
    && letra85.toUpperCase() == 'D' && letra87.toUpperCase() == 'O' && letra89.toUpperCase() == 'R' && letra91.toUpperCase() == 'E' 
    && letra93.toUpperCase() == 'S') {
        document.getElementById('quadrado36').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado37').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado40').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado51').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado55').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado62').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado68').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado74').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado85').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado87').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado89').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado91').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado93').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('imagemAcerto3').src = "carne.png"

    } else if(letra36.toUpperCase() == '' && letra37.toUpperCase() == '' && letra40.toUpperCase() == '' && letra51.toUpperCase() == '' 
    && letra55.toUpperCase() == '' && letra62.toUpperCase() == '' && letra68.toUpperCase() == '' && letra74.toUpperCase() == '' 
    && letra85.toUpperCase() == '' && letra87.toUpperCase() == '' && letra89.toUpperCase() == '' && letra91.toUpperCase() == '' 
    && letra93.toUpperCase() == '') {
        document.getElementById('quadrado36').style.backgroundColor = 'white'
        document.getElementById('quadrado37').style.backgroundColor = 'white'
        document.getElementById('quadrado40').style.backgroundColor = 'white'
        document.getElementById('quadrado51').style.backgroundColor = 'white'
        document.getElementById('quadrado55').style.backgroundColor = 'white'
        document.getElementById('quadrado62').style.backgroundColor = 'white'
        document.getElementById('quadrado68').style.backgroundColor = 'white'
        document.getElementById('quadrado74').style.backgroundColor = 'white'
        document.getElementById('quadrado85').style.backgroundColor = 'white'
        document.getElementById('quadrado87').style.backgroundColor = 'white'
        document.getElementById('quadrado89').style.backgroundColor = 'white'
        document.getElementById('quadrado91').style.backgroundColor = 'white'
        document.getElementById('quadrado93').style.backgroundColor = 'white'
        document.getElementById('imagemAcerto3').src = "vaca.png"
    } else {
        document.getElementById('quadrado36').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado37').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado40').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado51').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado55').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado62').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado68').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado74').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado85').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado87').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado89').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado91').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado93').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('imagemAcerto3').src = "vaca.png"
    }

    // Palavra 4

    var letra59 = quadrado59.value
    var letra60 = quadrado60.value
    var letra61 = quadrado61.value
    
    if(letra59.toUpperCase() == 'R' && letra60.toUpperCase() == 'A' && letra61.toUpperCase() == 'M') {
        document.getElementById('quadrado59').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado60').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado61').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('imagemAcerto4').src = "carne.png"

    } else if(letra59 == '' && letra60 == '' && letra61 == '') {
        document.getElementById('quadrado59').style.backgroundColor = 'white'
        document.getElementById('quadrado60').style.backgroundColor = 'white'
        document.getElementById('quadrado61').style.backgroundColor = 'white'
        document.getElementById('imagemAcerto4').src = "vaca.png"
    } else {
        document.getElementById('quadrado59').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado60').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado61').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('imagemAcerto4').src = "vaca.png"
    }

    // Palavra 5

    var letra27 = quadrado27.value
    var letra28 = quadrado28.value
    var letra29 = quadrado29.value
    
    if(letra27.toUpperCase() == 'R' && letra28.toUpperCase() == 'O' && letra29.toUpperCase() == 'M') {
        document.getElementById('quadrado27').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado28').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado29').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('imagemAcerto5').src = "carne.png"

    } else if(letra27 == '' && letra28 == '' && letra29 == '') {
        document.getElementById('quadrado27').style.backgroundColor = 'white'
        document.getElementById('quadrado28').style.backgroundColor = 'white'
        document.getElementById('quadrado29').style.backgroundColor = 'white'
        document.getElementById('imagemAcerto5').src = "vaca.png"
    } else {
        document.getElementById('quadrado27').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado28').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado29').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('imagemAcerto5').src = "vaca.png"
    }

    // Palavra 6

    var letra48 = quadrado48.value
    var letra54 = quadrado54.value
    var letra59 = quadrado59.value
    var letra67 = quadrado67.value
    var letra72 = quadrado72.value
    
    if(letra48.toUpperCase() == 'E' && letra54.toUpperCase() == 'P' && letra59.toUpperCase() == 'R' && letra67.toUpperCase() == 'O' && letra72.toUpperCase() == 'M') {
        document.getElementById('quadrado48').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado54').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado59').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado67').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado72').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('imagemAcerto6').src = "carne.png"

    } else if(letra48 == '' && letra54 == '' && letra59 == '' && letra67 == '' && letra72 == '') {
        document.getElementById('quadrado48').style.backgroundColor = 'white'
        document.getElementById('quadrado54').style.backgroundColor = 'white'
        document.getElementById('quadrado59').style.backgroundColor = 'white'
        document.getElementById('quadrado67').style.backgroundColor = 'white'
        document.getElementById('quadrado72').style.backgroundColor = 'white'
        document.getElementById('imagemAcerto6').src = "vaca.png"
    } else {
        document.getElementById('quadrado48').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado54').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado59').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado67').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado72').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('imagemAcerto6').src = "vaca.png"
    }

    // Palavra 7

    var letra80 = quadrado80.value
    var letra81 = quadrado81.value
    var letra82 = quadrado82.value
    var letra83 = quadrado83.value
    var letra84 = quadrado84.value
    
    if(letra80.toUpperCase() == 'F' && letra81.toUpperCase() == 'L' && letra82.toUpperCase() == 'A' && letra83.toUpperCase() == 'S' && letra84.toUpperCase() == 'H') {
        document.getElementById('quadrado80').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado81').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado82').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado83').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado84').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('imagemAcerto7').src = "carne.png"

    } else if(letra80 == '' && letra81 == '' && letra82 == '' && letra83 == '' && letra84 == '') {
        document.getElementById('quadrado80').style.backgroundColor = 'white'
        document.getElementById('quadrado81').style.backgroundColor = 'white'
        document.getElementById('quadrado82').style.backgroundColor = 'white'
        document.getElementById('quadrado83').style.backgroundColor = 'white'
        document.getElementById('quadrado84').style.backgroundColor = 'white'
        document.getElementById('imagemAcerto7').src = "vaca.png"
    } else {
        document.getElementById('quadrado80').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado81').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado82').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado83').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado84').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('imagemAcerto7').src = "vaca.png"
    }

    // Palavra 8

    var letra7 = quadrado7.value
    var letra13 = quadrado13.value
    var letra20 = quadrado20.value
    var letra23 = quadrado23.value
    var letra26 = quadrado26.value
    var letra30 = quadrado30.value
    var letra35 = quadrado35.value
    var letra39 = quadrado39.value
    var letra46 = quadrado46.value
    var letra58 = quadrado58.value
    var letra66 = quadrado66.value
    var letra71 = quadrado71.value
    var letra83 = quadrado83.value
    var letra86 = quadrado86.value
    
    if(letra7.toUpperCase() == 'M' && letra13.toUpperCase() == 'E' && letra20.toUpperCase() == 'M' && letra23.toUpperCase() == 'O' 
    && letra26.toUpperCase() == 'R' && letra30.toUpperCase() == 'I' && letra35.toUpperCase() == 'A' && letra39.toUpperCase() == 'D' 
    && letra46.toUpperCase() == 'E' && letra58.toUpperCase() == 'M' && letra66.toUpperCase() == 'A' && letra71.toUpperCase() == 'S'
    && letra83.toUpperCase() == 'S' && letra86.toUpperCase() == 'A') {
        document.getElementById('quadrado7').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado13').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado20').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado23').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado26').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado30').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado35').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado39').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado46').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado58').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado66').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado71').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado83').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado86').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('imagemAcerto8').src = "carne.png"

    } else if(letra7 == '' && letra13 == '' && letra20 == '' && letra23 == '' && letra26 == '' && letra30 == '' && letra35 == '' 
    && letra39 == '' && letra46 == '' && letra58 == '' && letra66 == '' && letra71 == ''&& letra83 == '' && letra86 == '') {
        document.getElementById('quadrado7').style.backgroundColor = 'white'
        document.getElementById('quadrado13').style.backgroundColor = 'white'
        document.getElementById('quadrado20').style.backgroundColor = 'white'
        document.getElementById('quadrado23').style.backgroundColor = 'white'
        document.getElementById('quadrado26').style.backgroundColor = 'white'
        document.getElementById('quadrado30').style.backgroundColor = 'white'
        document.getElementById('quadrado35').style.backgroundColor = 'white'
        document.getElementById('quadrado39').style.backgroundColor = 'white'
        document.getElementById('quadrado46').style.backgroundColor = 'white'
        document.getElementById('quadrado58').style.backgroundColor = 'white'
        document.getElementById('quadrado66').style.backgroundColor = 'white'
        document.getElementById('quadrado71').style.backgroundColor = 'white'
        document.getElementById('quadrado83').style.backgroundColor = 'white'
        document.getElementById('quadrado86').style.backgroundColor = 'white'
        document.getElementById('imagemAcerto8').src = "vaca.png"
    } else {
        document.getElementById('quadrado7').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado13').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado20').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado23').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado26').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado30').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado35').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado39').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado46').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado58').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado66').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado71').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado83').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado86').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('imagemAcerto8').src = "vaca.png"
    }

    // Palavra 9

    var letra33 = quadrado33.value
    var letra34 = quadrado34.value
    var letra35 = quadrado35.value

    if(letra33.toUpperCase() == 'D' && letra34.toUpperCase() == 'M' && letra35.toUpperCase() == 'A') {
        document.getElementById('quadrado33').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado34').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado35').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('imagemAcerto9').src = "carne.png"

    } else if(letra33 == '' && letra34 == '' && letra35 == '') {
        document.getElementById('quadrado33').style.backgroundColor = 'white'
        document.getElementById('quadrado34').style.backgroundColor = 'white'
        document.getElementById('quadrado35').style.backgroundColor = 'white'
        document.getElementById('imagemAcerto9').src = "vaca.png"
    } else {
        document.getElementById('quadrado33').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado34').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado35').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('imagemAcerto9').src = "vaca.png"
    }

    // Palavra 10

    var letra41 = quadrado41.value
    var letra42 = quadrado42.value
    var letra43 = quadrado43.value
    var letra44 = quadrado44.value
    var letra45 = quadrado45.value
    var letra46 = quadrado46.value
    var letra47 = quadrado47.value
    var letra48 = quadrado48.value
    var letra49 = quadrado49.value
    var letra50 = quadrado50.value
    
    if(letra41.toUpperCase() == 'C' && letra42.toUpperCase() == 'H' && letra43.toUpperCase() == 'I' && letra44.toUpperCase() == 'P' 
    && letra45.toUpperCase() == 'S' && letra46.toUpperCase() == 'E' && letra47.toUpperCase() == 'L' && letra48.toUpperCase() == 'E' 
    && letra49.toUpperCase() == 'C' && letra50.toUpperCase() == 'T') {
        document.getElementById('quadrado41').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado42').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado43').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado44').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado45').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado46').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado47').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado48').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado49').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado50').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('imagemAcerto10').src = "carne.png"

    } else if(letra41 == '' && letra42 == '' && letra43 == '' && letra44 == '' && letra45 == '' && letra46 == '' && letra47 == '' 
    && letra48 == '' && letra49 == '' && letra50 == '') {
        document.getElementById('quadrado41').style.backgroundColor = 'white'
        document.getElementById('quadrado42').style.backgroundColor = 'white'
        document.getElementById('quadrado43').style.backgroundColor = 'white'
        document.getElementById('quadrado44').style.backgroundColor = 'white'
        document.getElementById('quadrado45').style.backgroundColor = 'white'
        document.getElementById('quadrado46').style.backgroundColor = 'white'
        document.getElementById('quadrado47').style.backgroundColor = 'white'
        document.getElementById('quadrado48').style.backgroundColor = 'white'
        document.getElementById('quadrado49').style.backgroundColor = 'white'
        document.getElementById('quadrado50').style.backgroundColor = 'white'
        document.getElementById('imagemAcerto10').src = "vaca.png"
    } else {
        document.getElementById('quadrado41').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado42').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado43').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado44').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado45').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado49').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado47').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado48').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado46').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado50').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('imagemAcerto10').src = "vaca.png"
    }

    // Palavra 11

    var letra9 = quadrado9.value
    var letra10 = quadrado10.value
    var letra11 = quadrado11.value
    var letra12 = quadrado12.value
    var letra13 = quadrado13.value
    var letra14 = quadrado14.value
    var letra15 = quadrado15.value
    var letra16 = quadrado16.value
    var letra17 = quadrado17.value
    var letra18 = quadrado18.value
    
    if(letra9.toUpperCase() == 'A' && letra10.toUpperCase() == 'D' && letra11.toUpperCase() == 'D' && letra12.toUpperCase() == 'R' 
    && letra13.toUpperCase() == 'E' && letra14.toUpperCase() == 'S' && letra15.toUpperCase() == 'S' && letra16.toUpperCase() == 'B' 
    && letra17.toUpperCase() == 'U' && letra18.toUpperCase() == 'S') {
        document.getElementById('quadrado9').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado10').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado11').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado12').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado13').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado14').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado15').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado16').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado17').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('quadrado18').style.backgroundColor = 'rgb(60,179,113)'
        document.getElementById('imagemAcerto11').src = "carne.png"

    } else if(letra9 == '' && letra10 == '' && letra11 == '' && letra12 == '' && letra13 == '' && letra14 == '' && letra15 == '' 
    && letra16 == '' && letra17 == '' && letra18 == '') {
        document.getElementById('quadrado9').style.backgroundColor = 'white'
        document.getElementById('quadrado10').style.backgroundColor = 'white'
        document.getElementById('quadrado11').style.backgroundColor = 'white'
        document.getElementById('quadrado12').style.backgroundColor = 'white'
        document.getElementById('quadrado13').style.backgroundColor = 'white'
        document.getElementById('quadrado14').style.backgroundColor = 'white'
        document.getElementById('quadrado15').style.backgroundColor = 'white'
        document.getElementById('quadrado16').style.backgroundColor = 'white'
        document.getElementById('quadrado17').style.backgroundColor = 'white'
        document.getElementById('quadrado18').style.backgroundColor = 'white'
        document.getElementById('imagemAcerto11').src = "vaca.png"
    } else {
        document.getElementById('quadrado9').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado10').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado11').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado12').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado13').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado14').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado15').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado16').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado17').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('quadrado18').style.backgroundColor = 'rgb(192,192,192)'
        document.getElementById('imagemAcerto11').src = "vaca.png"
    }


    var letra1 = quadrado1.value
    if(letra1.toUpperCase() == 'Q') {
        document.getElementById('quadrado1').style.backgroundColor = 'rgb(60,179,113)'
    } else if(letra1 == '') {
        document.getElementById('quadrado1').style.backgroundColor = 'white'
    } else {
        document.getElementById('quadrado1').style.backgroundColor = 'rgb(255,99,71)'
    }

    var letra5 = quadrado5.value
    if(letra5.toUpperCase() == 'A') {
        document.getElementById('quadrado5').style.backgroundColor = 'rgb(60,179,113)'
    } else if(letra5 == '') {
        document.getElementById('quadrado5').style.backgroundColor = 'white'
    } else {
        document.getElementById('quadrado5').style.backgroundColor = 'rgb(255,99,71)'
    }

    var letra6 = quadrado6.value
    if(letra6.toUpperCase() == 'C') {
        document.getElementById('quadrado6').style.backgroundColor = 'rgb(60,179,113)'
    } else if(letra6 == '') {
        document.getElementById('quadrado6').style.backgroundColor = 'white'
    } else {
        document.getElementById('quadrado6').style.backgroundColor = 'rgb(255,99,71)'
    }

    var letra8 = quadrado8.value
    if(letra8.toUpperCase() == 'D') {
        document.getElementById('quadrado8').style.backgroundColor = 'rgb(60,179,113)'
    } else if(letra8 == '') {
        document.getElementById('quadrado8').style.backgroundColor = 'white'
    } else {
        document.getElementById('quadrado8').style.backgroundColor = 'rgb(255,99,71)'
    }

    
    var letra19 = quadrado19.value
    if(letra19.toUpperCase() == 'C') {
        document.getElementById('quadrado19').style.backgroundColor = 'rgb(60,179,113)'
    } else if(letra19 == '') {
        document.getElementById('quadrado19').style.backgroundColor = 'white'
    } else {
        document.getElementById('quadrado19').style.backgroundColor = 'rgb(255,99,71)'
    }

    var letra21 = quadrado21.value
    if(letra21.toUpperCase() == 'C') {
        document.getElementById('quadrado21').style.backgroundColor = 'rgb(60,179,113)'
    } else if(letra21 == '') {
        document.getElementById('quadrado21').style.backgroundColor = 'white'
    } else {
        document.getElementById('quadrado21').style.backgroundColor = 'rgb(255,99,71)'
    }

    var letra22 = quadrado22.value
    if(letra22.toUpperCase() == 'H') {
        document.getElementById('quadrado22').style.backgroundColor = 'rgb(60,179,113)'
    } else if(letra22 == '') {
        document.getElementById('quadrado22').style.backgroundColor = 'white'
    } else {
        document.getElementById('quadrado22').style.backgroundColor = 'rgb(255,99,71)'
    }

    var letra24 = quadrado24.value
    if(letra24.toUpperCase() == 'O') {
        document.getElementById('quadrado24').style.backgroundColor = 'rgb(60,179,113)'
    } else if(letra24 == '') {
        document.getElementById('quadrado24').style.backgroundColor = 'white'
    } else {
        document.getElementById('quadrado24').style.backgroundColor = 'rgb(255,99,71)'
    }

    var letra25 = quadrado25.value
    if(letra25.toUpperCase() == 'E') {
        document.getElementById('quadrado25').style.backgroundColor = 'rgb(60,179,113)'
    } else if(letra25 == '') {
        document.getElementById('quadrado25').style.backgroundColor = 'white'
    } else {
        document.getElementById('quadrado25').style.backgroundColor = 'rgb(255,99,71)'
    }

    var letra31 = quadrado31.value
    if(letra31.toUpperCase() == '5') {
        document.getElementById('quadrado31').style.backgroundColor = 'rgb(60,179,113)'
    } else if(letra31 == '') {
        document.getElementById('quadrado31').style.backgroundColor = 'white'
    } else {
        document.getElementById('quadrado31').style.backgroundColor = 'rgb(255,99,71)'
    }

    var letra32 = quadrado32.value
    if(letra32.toUpperCase() == 'E') {
        document.getElementById('quadrado32').style.backgroundColor = 'rgb(60,179,113)'
    } else if(letra32 == '') {
        document.getElementById('quadrado32').style.backgroundColor = 'white'
    } else {
        document.getElementById('quadrado32').style.backgroundColor = 'rgb(255,99,71)'
    }

    var letra38 = quadrado38.value
    if(letra38.toUpperCase() == 'T') {
        document.getElementById('quadrado38').style.backgroundColor = 'rgb(60,179,113)'
    } else if(letra38 == '') {
        document.getElementById('quadrado38').style.backgroundColor = 'white'
    } else {
        document.getElementById('quadrado38').style.backgroundColor = 'rgb(255,99,71)'
    }

    var letra52 = quadrado52.value
    if(letra52.toUpperCase() == '7') {
        document.getElementById('quadrado52').style.backgroundColor = 'rgb(60,179,113)'
    } else if(letra52 == '') {
        document.getElementById('quadrado52').style.backgroundColor = 'white'
    } else {
        document.getElementById('quadrado52').style.backgroundColor = 'rgb(255,99,71)'
    }

    var letra53 = quadrado53.value
    if(letra53.toUpperCase() == 'R') {
        document.getElementById('quadrado53').style.backgroundColor = 'rgb(60,179,113)'
    } else if(letra53 == '') {
        document.getElementById('quadrado53').style.backgroundColor = 'white'
    } else {
        document.getElementById('quadrado53').style.backgroundColor = 'rgb(255,99,71)'
    }


    var letra56 = quadrado56.value
    if(letra56.toUpperCase() == 'E') {
        document.getElementById('quadrado56').style.backgroundColor = 'rgb(60,179,113)'
    } else if(letra56 == '') {
        document.getElementById('quadrado56').style.backgroundColor = 'white'
    } else {
        document.getElementById('quadrado56').style.backgroundColor = 'rgb(255,99,71)'
    }

    var letra57 = quadrado57.value
    if(letra57.toUpperCase() == 'D') {
        document.getElementById('quadrado57').style.backgroundColor = 'rgb(60,179,113)'
    } else if(letra57 == '') {
        document.getElementById('quadrado57').style.backgroundColor = 'white'
    } else {
        document.getElementById('quadrado57').style.backgroundColor = 'rgb(255,99,71)'
    }

    var letra63 = quadrado63.value
    if(letra63.toUpperCase() == 'A') {
        document.getElementById('quadrado63').style.backgroundColor = 'rgb(60,179,113)'
    } else if(letra63 == '') {
        document.getElementById('quadrado63').style.backgroundColor = 'white'
    } else {
        document.getElementById('quadrado63').style.backgroundColor = 'rgb(255,99,71)'
    }


    var letra69 = quadrado69.value
    if(letra69.toUpperCase() == 'D') {
        document.getElementById('quadrado69').style.backgroundColor = 'rgb(60,179,113)'
    } else if(letra69 == '') {
        document.getElementById('quadrado69').style.backgroundColor = 'white'
    } else {
        document.getElementById('quadrado69').style.backgroundColor = 'rgb(255,99,71)'
    }

    var letra70 = quadrado70.value
    if(letra70.toUpperCase() == 'A') {
        document.getElementById('quadrado70').style.backgroundColor = 'rgb(60,179,113)'
    } else if(letra70 == '') {
        document.getElementById('quadrado70').style.backgroundColor = 'white'
    } else {
        document.getElementById('quadrado70').style.backgroundColor = 'rgb(255,99,71)'
    }

    var letra73 = quadrado73.value
    if(letra73.toUpperCase() == 'D') {
        document.getElementById('quadrado73').style.backgroundColor = 'rgb(60,179,113)'
    } else if(letra73 == '') {
        document.getElementById('quadrado73').style.backgroundColor = 'white'
    } else {
        document.getElementById('quadrado73').style.backgroundColor = 'rgb(255,99,71)'
    }

    

    var letra75 = quadrado75.value
    if(letra75.toUpperCase() == 'T') {
        document.getElementById('quadrado75').style.backgroundColor = 'rgb(60,179,113)'
    } else if(letra75 == '') {
        document.getElementById('quadrado75').style.backgroundColor = 'white'
    } else {
        document.getElementById('quadrado75').style.backgroundColor = 'rgb(255,99,71)'
    }

    var letra76 = quadrado76.value
    if(letra76.toUpperCase() == 'A') {
        document.getElementById('quadrado76').style.backgroundColor = 'rgb(60,179,113)'
    } else if(letra76 == '') {
        document.getElementById('quadrado76').style.backgroundColor = 'white'
    } else {
        document.getElementById('quadrado76').style.backgroundColor = 'rgb(255,99,71)'
    }

    var letra77 = quadrado77.value
    if(letra77.toUpperCase() == 'B') {
        document.getElementById('quadrado77').style.backgroundColor = 'rgb(60,179,113)'
    } else if(letra77 == '') {
        document.getElementById('quadrado77').style.backgroundColor = 'white'
    } else {
        document.getElementById('quadrado77').style.backgroundColor = 'rgb(255,99,71)'
    }

    var letra78 = quadrado78.value
    if(letra78.toUpperCase() == 'U') {
        document.getElementById('quadrado78').style.backgroundColor = 'rgb(60,179,113)'
    } else if(letra78 == '') {
        document.getElementById('quadrado78').style.backgroundColor = 'white'
    } else {
        document.getElementById('quadrado78').style.backgroundColor = 'rgb(255,99,71)'
    }

    var letra79 = quadrado79.value
    if(letra79.toUpperCase() == 'S') {
        document.getElementById('quadrado79').style.backgroundColor = 'rgb(60,179,113)'
    } else if(letra79 == '') {
        document.getElementById('quadrado79').style.backgroundColor = 'white'
    } else {
        document.getElementById('quadrado79').style.backgroundColor = 'rgb(255,99,71)'
    }

    var letra88 = quadrado88.value
    if(letra88.toUpperCase() == 'C') {
        document.getElementById('quadrado88').style.backgroundColor = 'rgb(60,179,113)'
    } else if(letra88 == '') {
        document.getElementById('quadrado88').style.backgroundColor = 'white'
    } else {
        document.getElementById('quadrado88').style.backgroundColor = 'rgb(255,99,71)'
    }

    

    var letra90 = quadrado90.value
    if(letra90.toUpperCase() == 'O') {
        document.getElementById('quadrado90').style.backgroundColor = 'rgb(60,179,113)'
    } else if(letra90 == '') {
        document.getElementById('quadrado90').style.backgroundColor = 'white'
    } else {
        document.getElementById('quadrado90').style.backgroundColor = 'rgb(255,99,71)'
    }

    

    var letra92 = quadrado92.value
    if(letra92.toUpperCase() == 'R') {
        document.getElementById('quadrado92').style.backgroundColor = 'rgb(60,179,113)'
    } else if(letra92 == '') {
        document.getElementById('quadrado92').style.backgroundColor = 'white'
    } else {
        document.getElementById('quadrado92').style.backgroundColor = 'rgb(255,99,71)'
    }

    

    var letra94 = quadrado94.value
    if(letra94.toUpperCase() == 'E') {
        document.getElementById('quadrado94').style.backgroundColor = 'rgb(60,179,113)'
    } else if(letra94 == '') {
        document.getElementById('quadrado94').style.backgroundColor = 'white'
    } else {
        document.getElementById('quadrado94').style.backgroundColor = 'rgb(255,99,71)'
    }

    if( letra94.toUpperCase() == 'E' && letra93.toUpperCase() == 'S' && letra92.toUpperCase() == 'R'
    && letra91.toUpperCase() == 'E' && letra90.toUpperCase() == 'O' && letra89.toUpperCase() == 'R'
    && letra88.toUpperCase() == 'C' && letra87.toUpperCase() == 'O' && letra86.toUpperCase() == 'A'
    && letra85.toUpperCase() == 'D' && letra84.toUpperCase() == 'H' && letra83.toUpperCase() == 'S'
    && letra82.toUpperCase() == 'A' && letra81.toUpperCase() == 'L' && letra80.toUpperCase() == 'F'
    && letra79.toUpperCase() == 'S' && letra78.toUpperCase() == 'U' && letra77.toUpperCase() == 'B'
    && letra76.toUpperCase() == 'A' && letra75.toUpperCase() == 'T' && letra74.toUpperCase() == 'A'
    && letra73.toUpperCase() == 'D' && letra72.toUpperCase() == 'M' && letra71.toUpperCase() == 'S'
    && letra70.toUpperCase() == 'A' && letra69.toUpperCase() == 'D' && letra68.toUpperCase() == 'R'
    && letra67.toUpperCase() == 'O' && letra66.toUpperCase() == 'A' && letra65.toUpperCase() == 'L'
    && letra64.toUpperCase() == 'U' && letra63.toUpperCase() == 'A' && letra62.toUpperCase() == 'T'
    && letra61.toUpperCase() == 'M' && letra60.toUpperCase() == 'A' && letra59.toUpperCase() == 'R'
    && letra58.toUpperCase() == 'M' && letra57.toUpperCase() == 'D' && letra56.toUpperCase() == 'E'
    && letra55.toUpperCase() == 'S' && letra54.toUpperCase() == 'P' && letra53.toUpperCase() == 'R'
    && letra52.toUpperCase() == '7' && letra51.toUpperCase() == 'I' && letra50.toUpperCase() == 'T' 
    && letra49.toUpperCase() == 'C' && letra48.toUpperCase() == 'E' && letra47.toUpperCase() == 'L'
    && letra46.toUpperCase() == 'E' && letra45.toUpperCase() == 'S' && letra44.toUpperCase() == 'P'
    && letra43.toUpperCase() == 'I' && letra42.toUpperCase() == 'H' && letra41.toUpperCase() == 'C'
    && letra40.toUpperCase() == 'G' && letra39.toUpperCase() == 'D' && letra38.toUpperCase() == 'T'
    && letra37.toUpperCase() == 'E' && letra36.toUpperCase() == 'R' && letra35.toUpperCase() == 'A'
    && letra34.toUpperCase() == 'M' && letra33.toUpperCase() == 'D' && letra32.toUpperCase() == 'E'
    && letra31.toUpperCase() == '5' && letra30.toUpperCase() == 'I' && letra29.toUpperCase() == 'M'
    && letra28.toUpperCase() == 'O' && letra27.toUpperCase() == 'R' && letra26.toUpperCase() == 'R'
    && letra25.toUpperCase() == 'E' && letra24.toUpperCase() == 'O' && letra23.toUpperCase() == 'O'
    && letra22.toUpperCase() == 'H' && letra21.toUpperCase() == 'C' && letra20.toUpperCase() == 'M'
    && letra19.toUpperCase() == 'C' && letra18.toUpperCase() == 'S' && letra17.toUpperCase() == 'U'
    && letra16.toUpperCase() == 'B' && letra15.toUpperCase() == 'S' && letra14.toUpperCase() == 'S'
    && letra13.toUpperCase() == 'E' && letra12.toUpperCase() == 'R' && letra11.toUpperCase() == 'D'
    && letra10.toUpperCase() == 'D' && letra9.toUpperCase() == 'A' && letra8.toUpperCase() == 'D'
    && letra7.toUpperCase() == 'M' && letra6.toUpperCase() == 'C' && letra5.toUpperCase() == 'A'
    && letra4.toUpperCase() == 'U' && letra3.toUpperCase() == 'P' && letra2.toUpperCase() == 'C'
    && letra1.toUpperCase() == 'Q'){

        document.getElementById('ganhou').style.display = "flex"
    
        var body = document.body;

        body.style.backgroundImage = 'url(https://i.pinimg.com/originals/7a/05/59/7a05593d9b060d27822658a98327b755.gif)';
    }

}

