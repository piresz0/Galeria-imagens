
document.addEventListener('DOMContentLoaded', function(){ 

    const baseImagens = {
        todas : ['imagem.jpg', 'cidade.jpg', 'animal.jpg', 'natureza.jpg'],
        natureza: ['natureza.jpg'],
        cidade: ['cidade.jpg'],
        animal: ['animal.jpg'],
    }

    function carregaImagens(){
        // Selecionar elementos HTML com base em um seletor //
        const galeria = document.querySelector("#galeria-imagens");
        const imagens = baseImagens['todas'];

        imagens.forEach(img => { 
            
            galeria.innerHTML += '<div> <img src="imagens/'+img +'"/> </div>';
        })

    }

    carregaImagens();



    //Evento de clique
    document.body.addEventListener('click', function (event) {
        //Acessa a lista de classe de onde clicou e procura pela classe botao0categoria
        if (event.target.classList.contains('botao-categoria')){
            alert(123);
        }

    })

  })
