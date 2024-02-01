/**
 * Objetivo 1 - Quando o usuario clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma
 *      Passo 1 - Pegar o botão de seleção de plataformas no JS pra poder verificar quando o usuario clicar em cina dele.
 *      
 *      Passo 2 - Pegar o elemento do conteudo que precisa ser mostrado.
 * 
 *      Passo 3 -  Pegar o click do usuario no JS.
 * 
 *      Passo 4 -  Quando o usuario clicar, adicionar a classe ativo na listagem de plataformas dentro do botao pra que o conteudo apareça.
 * 
 * 
 * Objetivo 2 - Caso a lista de botoes de plataformas ja esteja aparecendo e o usuario clicar em cima do botao, o conteudo deve ser escondido.
 *      Passo 1 - Verificar se o botao ja esta aberto, se sim, devemos remover a calsse ATIVO pra que ele esconda o conteudo novamente.
 */


//Objetivo 1 e passo 1
const botao = document.querySelector(".btn-plataforma");


//Passo 2
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

//Passo 3
botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativa")
})


