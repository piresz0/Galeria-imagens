
document.addEventListener('DOMContentLoaded', function(){ 

    const baseImagens = {
        todas : ['imagem.jpg', 'cidade.jpg', 'animal.gif', 'natureza.jpg'],
        natureza: ['natureza.jpg'],
        cidade: ['cidade.jpg'],
        animal: ['animal.gif'],
    }

    function carregaImagens(categoria){
        // Selecionar elementos HTML com base em um seletor //
        const galeria = document.querySelector("#galeria-imagens");
        galeria.innerHTML = ''; //Limpar bloco, paga tudo dentro
        const imagens = baseImagens[categoria];

        imagens.forEach(img => { 
            galeria.innerHTML += '<div> <img src="imagens/'+img +'"/> </div>';
        })

    }

    carregaImagens('todas');



    //Evento de clique
    document.body.addEventListener('click', function (event) {
        //Acessa a lista de classe de onde clicou e procura pela classe botao0categoria
        if (event.target.classList.contains('botao-categoria')){

const categoria = event.target.dataset.categoria



            //alert(categoria);

            carregaImagens(categoria);


        }

    })

  })
