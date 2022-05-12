function add (num){ // aparecer o numero ao botão ser clicado
    var n = res.innerHTML += num // aparecer outro numero sem que o anterior suma
}

function calcular(){
    var resultado = document.getElementById('res').innerHTML 
    if (resultado) { 
        document.getElementById('res').innerHTML = eval(resultado) // eval é para fazer a equação
    } else {
        document.getElementById('res').innerHTML = 'Impossível' // caso não houver número
    }
        
}

function clean() {
    var limpar = document.getElementById('res').innerHTML = ""
}

function backspace(){
    var result = document.getElementById('res')
    result.innerHTML = result.innerHTML.slice(0, -1)
}