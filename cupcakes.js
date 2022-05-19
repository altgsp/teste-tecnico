const frete100 = 100;
if (frete100 == 100){
	$("body").append("<section>Faltam mais R$100 para o frete sair de graça!</section>");
	$('section').addClass('barraFrete');
} 

$(".botao-comprar").click((event) => {
	let	totalCompra = document.querySelector('.subtotal');
	let compraFrete = totalCompra.children[1].innerHTML;
	console.log(compraFrete);
	let compraFim = parseFloat(compraFrete.split(' ')[1]);
	console.log(compraFim);
	
	let subtotal = document.querySelector('.subtotal');
	let compraFreteNova = subtotal.children[1].innerHTML;
	let subtotalNova = parseFloat(compraFreteNova.split(' ')[1]);
	console.log(subtotalNova);
	
	let frete100 = 100 - compraFim;

	barraProgresso = () => {
		let i = 0;
			if (i == 0 ){
				i = 1;
				let element = document.querySelector(".barraFrete div");
				let width = 1;
				let id = setInterval(caixaFrete, 10);
				function caixaFrete () {
					if (width >=100){
						clearInterval(id);
						i = 0;
					}else{
						width = subtotalNova ;
						element.style.width = width +"%";
						
						}
					}
				} 
		}
		if (frete100 < 100 && frete100 > 0.01) {
			
			$("body").append("<section><div></div><p>Faltam mais R$"+frete100+" para o frete sair de graça!<p></section>");
			$('section').addClass('barraFrete'); 
			
			$(".frete").append("<p>Faltam mais R$"+frete100+" para o frete sair de graça!</p>");
			barraProgresso();
		
		}
		else if (frete100 <= 0){
			let subtotal = document.querySelector('.subtotal');
			
			let compraFreteNova = subtotal.children[1].innerHTML;
			console.log(compraFreteNova);

			let frete = document.querySelector('.frete');
			$(frete).addClass("fechado");		
            $("body").append("<section>Parabéns! O frete é por nossa conta.</section>");
			$('section').addClass('barraFrete');
			$('section').addClass('barraFreteAtualizada');
            $(".total").prepend("<p>Você ganhou frete grátis!</p>");
			$("p").addClass('freteGarantido');
            $(".totais .clearfix").prepend("<p>Você ganhou frete grátis!</p>");
			$("p").addClass('freteGarantido');
		}	
	});
	
$(".remover").click((event) => {
	let	totalCompra = document.querySelector('.subtotal');
	let compraFrete = totalCompra.children[1].innerHTML;
	console.log(compraFrete);
	let compraFim = parseFloat(totalCompra.split(' ')[1]);
	console.log(compraFim);
	
	let subtotal = document.querySelector('.subtotal');
	let compraFreteNova = subtotal.children[1].innerHTML;
	let subtotalNova = parseFloat(compraFreteNova.split(' ')[1]);
	console.log(subtotalNova);
		
	let frete100 = 100 - compraFim;

	barraProgresso = () => {
		let i = 0;
			if (i == 0 ){
				i = 1;
				let element = document.querySelector(".barraFrete div");
				let width = 1;
				let id = setInterval(caixaFrete, 10);
				function caixaFrete () {
					if (width >=100){
						clearInterval(id);
						i = 0;
					}else{
						width = subtotalNova ;
						element.style.width = width +"%";
						
						}
					}
				} 
		}
		if (frete100 < 100 && frete100 > 0.01) {
			
			$("body").append("<section><div></div><p>Faltam mais R$"+frete100+" para o frete sair de graça!<p></section>");
			$('section').addClass('barraFrete'); 
			
			$(".frete").append("<p>Faltam mais R$"+frete100+" para o frete sair de graça!</p>");
			barraProgresso();
		
		}
		else if (frete100 <= 0){
			let subtotal = document.querySelector('.subtotal');
			
			let compraFreteNova = subtotal.children[1].innerHTML;
			console.log(compraFreteNova);
	
			let frete = document.querySelector('.frete');
			$(frete).addClass("fechado");
			$("body").append("<section>Parabéns! O frete é por nossa conta.</section>");
			$('section').addClass('barraFrete');
			$('section').addClass('barraFreteAtualizada');
			$(".total").prepend("<p>Você ganhou frete grátis!</p>");
			$("p").addClass('freteGarantido');
		}	
	});
