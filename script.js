const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    
    {
        enunciado: "Vocễ acha que as enchentes podem voltar a acontecer?",
        alternativas: [
            "Sim, acredito que podem voltar a acontecer",
            "Não, acredito que foi a última vez!",
        ]
    },
    {
        enunciado: "Os prejudicados pela enchente estão recebendo o apoio necesário?",
        alternativas: [
            "Sim, já estão recebendo apoio ",
            "Não, ainda não é o suficiente",
        ]
    },
    { 
        enunciado: "Todos conseguiram um abrigo seguro para ficar durante as enchentes?",
     alternativas: [
        "Todos conseguiram",
        "Não foi todos que conseguiram",
    ]
},
    {
        enunciado: "Você acha que as doações foram o suficiente para as pessoas se reerguerem?",
        alternativas: [
            "Foram o suficiente",
            "Não foram o suficiente",
        ]
    }
]; 

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();