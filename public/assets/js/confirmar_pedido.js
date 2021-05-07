const confirmar = document.querySelector('.confirmar');

function confirm() {

    const nome = prompt('Digite o seu nome: ');
    const endereco = prompt('Agora insira o seu endereço: ');

    const wp = 
    `Olá, gostaria de fazer o pedido:
    - Prato: ${revisaoCaixa.children[1].children[0].innerText}
    - Bebida: ${revisaoCaixa.children[2].children[0].innerText}
    - Sobremesa: ${revisaoCaixa.children[3].children[0].innerText}
    Total: R$ ${String(total.toFixed(2)).replace('.', ',')}
    
    Nome: ${nome}
    Endereço: ${endereco}`;

    const texto = encodeURI(wp);
    const url = `https://wa.me/5521999789570/?text=${texto}`;
    window.location.href = url;
}

confirmar.addEventListener('click', confirm);