document.addEventListener('DOMContentLoaded', function () {

	const baseImagens = {
		todas: ['cidade.jpg', 'animal.jpg', 'natureza.jpg'],
    
		natureza: ['natureza.jpg'],
		cidade: ['cidade.jpg'],
		animal: ['animal.jpg'],
	}

	function carregaImagens(categoria) {
		//Selecionar elementos HTML com base em um seletor
		const galeria = document.querySelector("#galeria-imagens");
		galeria.innerHTML = ''; //Limpar bloco, paga tudo dentro
		const imagens = baseImagens[categoria];

		imagens.forEach(img => {
			galeria.innerHTML += '<div class="imagem-item" > <img src="imagens/' + img + '" />  </div>';
		})
	}

	function ordenaImagens(ordem) {

		const imagens = Array.from(document.querySelectorAll("#galeria-imagens .imagem-item"));

		imagens.sort((a, b) => {
			const nameA = a.querySelector('img').getAttribute('alt');
			const nameB = b.querySelector('img').getAttribute('alt');
		})


	}


	// Evento de clique
	document.body.addEventListener('click', function (event) {
		if (event.target.classList.contains('botao-categoria')) {
			const categoria = event.target.dataset.categoria;
			carregaImagens(categoria);
		}
		if (event.target.classList.contains('botao-ordenar')) {
			const ordem = event.target.dataset.ordem;
			ordenaImagens(ordem);
		}
	})



	carregaImagens('todas');

})