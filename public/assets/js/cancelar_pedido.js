const cancelar = document.querySelector('.cancelar');

function cancelarPedido() {
    revisao.classList.add('escondido');
}

cancelar.addEventListener('click', cancelarPedido);
