const opcao_escolhida = document.querySelectorAll('.produtos-lista');
const comida = opcao_escolhida[0].children;
const bebida = opcao_escolhida[1].children;
const sobremesa = opcao_escolhida[2].children;

function selecao(evento){

    const pai = evento.currentTarget.parentNode;

    if(evento.currentTarget.classList.contains('selecionado')) {
        evento.currentTarget.classList.remove('selecionado');
    }
    else {
        for(let i = 0; i < pai.children.length; i++) {
            pai.children[i].classList.remove('selecionado');
        }    
        evento.currentTarget.classList.add('selecionado');    
    }
    fecharPedido()
}

for(let i = 0; i < comida.length; i++){
    comida[i].addEventListener('click', selecao, true);
}
for(let i = 0; i < bebida.length; i++){
    bebida[i].addEventListener('click', selecao, true);
}
for(let i = 0; i < sobremesa.length; i++){
    sobremesa[i].addEventListener('click', selecao, true);
}
