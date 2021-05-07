const revisao = document.querySelector('.revisao');
const revisaoCaixa = document.querySelector('.revisao-caixa');
const totalValor = document.querySelector('.total');
let total = 0;

function confirmacao() {

    revisao.classList.remove('escondido');
    
    const selecionado = document.querySelectorAll('.selecionado');

    revisaoCaixa.children[1].innerHTML = `
                                        <p>${selecionado[0].children[0].children[1].innerText}</p>
                                        <p>${selecionado[0].children[0].children[3].innerText}</p>`;
    revisaoCaixa.children[2].innerHTML = `
                                        <p>${selecionado[1].children[0].children[1].innerText}</p>
                                        <p>${selecionado[1].children[0].children[3].innerText}</p>`;
    revisaoCaixa.children[3].innerHTML = `
                                        <p>${selecionado[2].children[0].children[1].innerText}</p>
                                        <p>${selecionado[2].children[0].children[3].innerText}</p>`;

    const comidaPreco = parseFloat(selecionado[0].children[0].children[3].innerText.replace('R$ ', '').replace(',', '.'));
    const bebidaPreco = parseFloat(selecionado[1].children[0].children[3].innerText.replace('R$ ', '').replace(',', '.'));
    const sobremesaPreco = parseFloat(selecionado[2].children[0].children[3].innerText.replace('R$ ', '').replace(',', '.'));

    total = comidaPreco + bebidaPreco + sobremesaPreco;
    totalValor.innerHTML = `
                    <p>total</p>
                    <p>R$ ${String(total.toFixed(2)).replace('.', ',')}</p>`;
}

pedido.addEventListener('click', confirmacao);




