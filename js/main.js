// Constante onde é indicado a variável do Seletor.
const controle = document.querySelectorAll('[data-controle]');// formato de indicar um elemento DATTA ATTRIBUTE


// Função Anônima no ARRAY ( lista de Itens ) onde é executado a função
controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);// textContent = Botão de Soma ou Subtração / parentNode = Elemento do HTML a ser alterado
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
