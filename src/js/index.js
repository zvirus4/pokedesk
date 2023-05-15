const botaoAlteraTema = document.getElementById("botao-altera-tema");

const body = document.querySelector("body")
const imagemBaotaoTrocaDeTema = document.querySelector(".imagem-botao")

addEventListener("click", () => {

    const ModoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    body.classList.toggle("modo-escuro")
 if (ModoEscuroEstaAtivo) {
        ;
        imagemBaotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
    } else {
       
        imagemBaotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")}

    })


