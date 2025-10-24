const valor_auto = document.getElementById("valor_auto")
const planes_credito = document.getElementById("planesCredito")
const enganche = document.getElementById("enganche")
const pago_inicial = document.getElementById("pagoini")
const pago_financiar = document.getElementById("total_financiar")
const pago_mesual = document.getElementById("pago_mensual")
const calcular = document.getElementById("calcular")

function calculo(){
    const meses = parseInt(planes_credito.value)
    const enga = parseFloat(enganche.value)
    const valor = parseFloat(valor_auto.value)

    let pagoini = valor*enga;
    let pagofina = valor - pagoini ;
    let pagomensu = pagofina / meses;

    pago_inicial.value = pagoini;
    pago_financiar.value = pagofina;
    pago_mesual.value = pagomensu;


}

calcular.addEventListener("click", calculo)

