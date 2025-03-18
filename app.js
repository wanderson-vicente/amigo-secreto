//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Inicialização da lista de amigos
let listaDeAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
  // Obter o valor do campo de entrada
  const inputAmigo = document.getElementById('amigo');
  const nomeAmigo = inputAmigo.value.trim();
  
  
  // Adicionar o nome à lista
  listaDeAmigos.push(nomeAmigo);
  
 console.log(listaDeAmigos);
   

}