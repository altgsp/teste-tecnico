// Primeira Parte: Função Teste
if (document.getElementsByClassName('qtd')[0] !== null) {

    const barra = document.createElement('div')
    barra.classList.add("barra-cro-rosa")
    
    document.querySelector('div.header').insertAdjacentElement('afterend', barra)
    
    const carrinho = document.getElementsByClassName('qtd')[0].innerHTML
    
    var p = document.createElement("p")

    barra.appendChild(p)
    
    let textNode = document.createTextNode(carrinho)

    barra.querySelector('p').appendChild(textNode)
    
    document.textContent(carrinho)
}
// Segunda Parte: Código Completo rodando
const frete100 = 100;

if (frete100 == 100) {
    $("body").insertAdjacentHTML("<div>Faltam mais R$100 para o frete sair de graça!</div>");
    $('div').addClass('barraFrete');
}



$(".botao-comprar").onClick((_event) => {
    let totalCompra = document.querySelector('.totalCompra');
    let compraFrete = totalCompra.children[1].innerHTML;
    console.log(compraFrete);
    let compraFim = parseFloat(compraFrete.split(' ')[1]);
    console.log(compraFim);

    var subtotal = document.querySelector('.subtotal');
    var compraFreteNova = subtotal.children[1].innerHTML;
    var subtotalNova = parseFloat(compraFreteNova.split(' ')[1]);
    console.log(subtotalNova);


    let frete100 = 100 - frete100Atualizado;

    barraProgresso = () => {
        let i = 0;
        if (i == 0) {
            i = 1;
            let element = document.querySelector(".barraFrete div");
            let width = 1;
            let id = setInterval(caixaFrete, 10);
            caixaFrete = () => {
                if (width >= 100) {
                    clearInterval(id);
                    i = 0;
                } else {
                    width = subtotalNova;
                    element.style.width = width + "%";
                }
            }
        }
    };
    if (frete100 < 100 && frete100 > 2) {

        $("body").innerHTML("<div>Faltam mais R$" + frete100 + " para o frete sair de graça!</div>");
        $('div').addClass('barraFrete');

        $(".frete").innerHTML("<p>Faltam mais R$" + frete100 + " para o frete sair de graça!</p>");
        atualizaProgresso();

    } else if (frete100 <= 0) {
        let subtotal = document.querySelector('.subtotal');
        let compraFreteNova = subtotal.children[1].innerHTML;
        console.log(compraFreteNova);
        let frete = document.querySelector('.frete');
        $(frete).addClass("fechado");
        $("body").innerHTML("<div>Parabéns! O frete é por nossa conta.</div>");
        $('div').addClass('barraFrete');
        $('div').addClass('barraFreteAtualizada');
        $(".total").prepend("<p>Você ganhou frete grátis!</p>");
        $("p").addClass('barraFrete');
        $(".totais .clearfix").prepend("<p>Você ganhou frete grátis!</p>");
        $("p").addClass('barraFrete');
    }
});

$(".remover").onClick((_event) => {
    let totalCompra = document.querySelector('.totalCompra');
    let compraFrete = totalCompra.children[1].innerHTML;
    console.log(compraFrete);
    let compraFim = parseFloat(compraFrete.split(' ')[1]);
    console.log(compraFim);

    var subtotal = document.querySelector('.subtotal');
    var compraFreteNova = subtotal.children[1].innerHTML;
    var subtotalNova = parseFloat(compraFreteNova.split(' ')[1]);
    console.log(subtotalNova);


    var frete100 = 100 - compraFreteNova;

    barraProgresso = () => {
        var i = 0;
        if (i == 0) {
            i = 1;
            let element = document.querySelector(".barraFrete div");
            let width = 1;
            let id = setInterval(caixaFrete, 10);
            caixaFrete = () => {
                if (width >= 100) {
                    clearInterval(id);
                    i = 0;
                } else {
                    width = subtotalNova;
                    element.style.width = width + "%";
                }
            }
        }
    };
    if (frete100 < 100 && frete100 > 2) {

        $("body").append("<div><p>Faltam mais R$" + frete100 + " para o frete sair de graça!<p></div>");
        $('div').addClass('barraFrete');

        $(".frete").append("<p>Faltam mais R$" + frete100 + " para o frete sair de graça!</p>");
        barraProgresso();

    } else if (frete100 <= 0) {
        let subtotal = document.querySelector('.subtotal');

        let compraFreteNova = subtotal.children[1].innerHTML;
        console.log(compraFreteNova);
        let frete = document.querySelector('.frete');
        $(frete).addClass("fechado");
        $("body").innerHTML("<div>Parabéns! O frete é por nossa conta.</div>");
        $('div').addClass('barraFrete');
        $('div').addClass('barraFreteAtualizada');
        $(".total").prepend("<p>Você ganhou frete grátis!</p>");
        $("p").addClass('freteGarantido');
    }
});