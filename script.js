function adicionarCaracter(caracter){
    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = valorDisplay + caracter
}

function limpaTela(){
    document.querySelector(".display").value = ""
}

function calcular(){
    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = eval(valorDisplay)
}

function invertNumber(){
    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = valorDisplay * -1
}