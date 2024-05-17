
document.addEventListener('DOMContentLoaded', function(){ 

    const baseImagens = {
        todas : ['imagem.jpg', 'cidade.jpg', 'animal.jpg', 'natureza.jpg']
        natureza: [],
        cidade: [],
        animal: [],
    }

    //Evento de clique
    document.body.addEventListener('click', function (event) {
        //Acessa a lista de classe de onde clicou e procura pela classe botao0categoria
        if (event.target.classList.contains('botao-categoria')){
            alert(123);
        }

    })

  })