const caixaprincipal = document.querySelector ("caixaprincipal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Vocễ acha que as enchentes podem voltar a acontecer?",
        alternativas: [
            "Sim, acredito que podem voltar a acontecer",
            "Não, acredito que foi a última vez"
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    }
]; 

