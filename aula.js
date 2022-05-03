var visor = document.getElementById('lcd')
function calcular(n){
    visor.innerHTML += n     
}

function resetar(){
    visor.textContent = ''
}

function operar(operador){
    if(operador == '+'){
        visor.textContent += '+'
    } else if(operador == '-'){
        visor.textContent += '-'
    } else if(operador == '*'){
        visor.textContent += '*'
    } else if(operador == '/'){
        visor.textContent += '/'
    } else if(operador == '.'){
        visor.textContent += '.'
    } else if(operador == '='){
        var resultado = document.getElementById('lcd').textContent
        visor.innerHTML = eval(resultado)
        

    }
}

