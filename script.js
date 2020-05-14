function verificar() {
    var res = document.getElementById('res')
    var primeirof = document.getElementsByName('pergunta1')
    var segundof = document.getElementsByName('pergunta2')
    var terceirof = document.getElementsByName('pergunta3')
    var personagem = ' '
    // var contador = {"jim": 0, "pam": 0, "creed": 0, "michael": 0, "dwigth": 0};
    var contador1 = 0
    var contador2 = 0
    var contador3 = 0
    var contador3 = 0
    var contador4 = 0
    var contador5 = 0
    var img = document.createElement('img')
        img.setAttribute('id', 'foto')

    if (primeirof[0].checked) {
        contador1 += 1
    } else if (primeirof[1].checked) {
        contador2 += 1
    } else if (primeirof[2].checked) {
        contador3 += 1
    } else if (primeirof[3].checked) {
        contador4 += 1
    } else if (primeirof[4].checked) {
        contador5 += 1
    }

    if (segundof[0].checked) {
        contador1 += 1
    } else if (segundof[1].checked) {
        contador2 += 1
    } else if (segundof[2].checked) {
        contador3 += 1
    } else if (segundof[3].checked) {
        contador4 += 1
    } else if (segundof[4].checked) {
        contador5 += 1
    }

    if (terceirof[0].checked) {
        contador1 += 1
    } else if (terceirof[1].checked) {
        contador2 += 1
    } else if (terceirof[2].checked) {
        contador3 += 1
    } else if (terceirof[3].checked) {
        contador4 += 1
    } else if (terceirof[4].checked) {
        contador5 += 1
    }


    if ((contador1 > contador2) && (contador1 > contador3) && (contador1 > contador4) && (contador1 > contador5)) {
        personagem = 'Jim'
        img.setAttribute('src', 'jim.png')
    } else if ((contador2 > contador1) && (contador2 > contador3) && (contador2 > contador4) && (contador2 > contador5)) {
        personagem = 'Pam'
        img.setAttribute('src', 'pam.png')
    } else if ((contador3 > contador1) && (contador3 > contador2) && (contador3 > contador4) && (contador3 > contador5)) {
        personagem = 'Dwight'
        img.setAttribute('src', 'dwight.png')
    } else if ((contador4 > contador1) && (contador4 > contador2) && (contador4 > contador3) && (contador4 > contador5)) {
        personagem = 'Michael'
        img.setAttribute('src', 'michael.png')
    } else if ((contador5 > contador1) && (contador5 > contador2) && (contador5 > contador3) && (contador5 > contador4)) {
        personagem = 'Creed'
        img.setAttribute('src', 'creed.png')
    }

    res.style.textAlign = 'center'
    res.innerHTML = `<p>Você é o(a) <strong>${personagem}</strong>!</p><br>`
    res.appendChild(img)

}