
let inputResultado = document.getElementById("inputResultado");

let val_1 = document.getElementById("val_1");
if (val_1.checked == true) {
    val_1.value=1
} else {
    val_1.value=0
}
console.log(val_1.value)

let calculo = {
    primeiroValor: 0,
    segundoValor: 0,
    funcaoParaCalular: null
}

// Adiciona o número na tela
function inserirNumero() {
    // Se o valor na tela não for um número,
    // substitui pelo número/valor do botão
    if (isNaN(inputResultado.value)) {
        inputResultado.value = event.target.textContent;
        // Senão, adiciona o texto junto com o existente
    } else {
        // Se o valor na tela for zero, substitui o valor na tela pelo número clicado
        if (inputResultado.value == 0) {
            inputResultado.value = event.target.textContent;
        // Senão adiciona o número ao input para criar digitos maiores que 0
        } else {
            inputResultado.value += event.target.textContent;
        }
    }
}

function atribuirEventos() {
    //Atribui eventos aos números 
    document.getElementById("val_1").addEventListener("click", inserirNumero);
    document.getElementById("val_2").addEventListener("click", inserirNumero);
    document.getElementById("val_3").addEventListener("click", inserirNumero);
    document.getElementById("val_4").addEventListener("click", inserirNumero);
    document.getElementById("val_5").addEventListener("click", inserirNumero);
    document.getElementById("val_6").addEventListener("click", inserirNumero);
    document.getElementById("val_7").addEventListener("click", inserirNumero);
    document.getElementById("val_8").addEventListener("click", inserirNumero);
    document.getElementById("val_9").addEventListener("click", inserirNumero);
}

function somarValores(valor1, valor2){
    return valor1 + valor2;
}