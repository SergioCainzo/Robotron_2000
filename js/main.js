// Constante onde é indicado a variável do Seletor.
const controle = document.querySelectorAll('[data-controle]');// formato de indicar um elemento DATTA ATTRIBUTE
const estatistica = document.querySelectorAll('[data-estatistica]');

// Estatistica de poder
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

// Função Anônima no ARRAY ( lista de Itens ) onde é executado a função
controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);// textContent = Botão de Soma ou Subtração / parentNode = Elemento do HTML a ser alterado
        atualizaEstatisticas(evento.target.dataset.peca);
    })
})

// Função de Manipulação de Dados
function manipulaDados(operacao, controle){ // Operação = Soma ou Subtração / Controle = Elemento do HTML a ser alterado
    const peca = controle.querySelector('[data-contador]'); // Utilizamos o ".", pois não é um ID"#" e sim uma CLASS"." //Podemos atribuir "data-contador" para todos os elementos no momento de localização

    // Condição de Soma ou Subtração no botão.
    if (operacao === "-"){
        Number(peca.value --);
    } else{
        Number(peca.value ++);
    }
}

function atualizaEstatisticas(peca) {
    estatistica.forEach( (elemento) => {
        elemento.textContent = Number(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    })
}