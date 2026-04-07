function calcularMedia() {
    let valor1 = document.getElementById("inputvalor1").value
    let valor2 = document.getElementById("inputValor2").value
    let resultado = document.getElementById("exibirErro")

    if (valor1 === "" || valor2 === "") {
        resultado.innerHTML = "Preencha todos os campos"
    } else {
        let num1 = Number(valor1)
        let num2 = Number(valor2)

        let media = (num1 + num2) / 2

        resultado.innerHTML = "Média: " + media
    }
}