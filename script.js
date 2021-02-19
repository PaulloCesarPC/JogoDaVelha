var jogador,vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
let quadrados =  new Array(10);
for (var i = 1; i < quadrados.length ; i++) 
    quadrados[i] = document.getElementById(i);

mudarJogador('X');

function escolherQuadrado(id) {
    if(vencedor !== null) 
        return;
    
    var quadrado = document.getElementById(id);
    
    if(quadrado.innerHTML !== '-')
        return;
    
    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000' ;

    jogador = jogador === 'X' ? 'O':'X';  

    mudarJogador(jogador);
    checaVencedor();
}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor(){
    if( check(1, 2, 3) || check(4, 5, 6) || check(7, 8, 9) ||
        check(1, 4, 7) || check(2, 5, 8) || check(3, 6, 9) ||
        check(1, 5, 9) || check(3, 5, 7)
    )return;   
}

function check(a,b,c){
    if (checaSequencia(quadrados[a], quadrados[b], quadrados[c])) {
        mudaCorQuadrado(quadrados[a], quadrados[b], quadrados[c]);
        mudarVencedor(quadrados[a]);
        return;
    }
}

function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
    if (quadrado1.innerHTML !== '-' && 
    quadrado1.innerHTML === quadrado2.innerHTML && 
    quadrado2.innerHTML === quadrado3.innerHTML) 
        return true;
    
    return false;
}

function reiniciar()
{
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }

    mudarJogador('X');
}