// Capturar evento de submit do formulário
const form = document.querySelector("#formulario");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputPeso = e.target.querySelector("#peso");
    const inputAltura = e.target.querySelector("#altura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado("Peso inválido", false);
        return;
    }

    if (!altura) {
        setResultado("Altura inválida", false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    setResultado(msg, true);
});

function getNivelImc(imc) {
    const niveis = ["Abaixo do peso", "Peso normal", "Sobrepeso", "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"];

    if (imc >= 39.9) return niveis[5];
    if (imc >= 34.9) return niveis[4];
    if (imc >= 29.9) return niveis[3];
    if (imc >= 24.9) return niveis[2];
    if (imc >= 18.5) return niveis[1];
    return niveis[0];
}

function getImc(peso, altura) {
    return (peso / (altura ** 2)).toFixed(2);
}

function criaP() {
    const p = document.createElement("p");
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = "";

    const p = criaP();
    p.innerHTML = msg;
    p.classList.add(isValid ? "paragrafo-resultado" : "bad");

    resultado.appendChild(p);
}
