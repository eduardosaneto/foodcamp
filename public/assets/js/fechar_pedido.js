const pedido = document.querySelector('.base button');

function fecharPedido() {
    
    const selecionado = document.querySelectorAll('.selecionado');

    if(selecionado.length === 3) {        
        pedido.removeAttribute('disabled');
        pedido.classList.remove('bloqueado');
        pedido.classList.add('fechado');
    }
    else{
        pedido.setAttribute('disabled', true);
        pedido.classList.remove('fechado'); 
        pedido.classList.add('bloqueado');
    }
}