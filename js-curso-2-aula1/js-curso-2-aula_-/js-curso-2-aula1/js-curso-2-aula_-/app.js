let numerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag,texto){
    let campo= document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portugues Female',{rate:1.2});
}

exibirInicial();
function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute==numeroSecreto) {
        exibirTextoNaTela("h1","ACERTOU!!");
        let mensagemTentativas = tentativas>1?" tentativas!":" tentativa!";
        exibirTextoNaTela("p","muito bem voce acertou o numero é = "+numeroSecreto+" com "+tentativas+mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    

    }else if(chute> numeroSecreto){
        exibirTextoNaTela("p","Numero secreto é menor!");
        

    }else {
        exibirTextoNaTela("p","Numero secreto é maior");
    }
    tentativas++;
    limparCampo();

}
function exibirInicial() {
    exibirTextoNaTela('h1','Escolha de 1 a 10');
    exibirTextoNaTela('p','jogo');
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random()*10 +1);
   let qntNaLista = numerosSorteados.length;
    if( qntNaLista ==10){
        numerosSorteados= [];
        console.log("reseting");
    }
    if (numerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }  else {
        numerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

