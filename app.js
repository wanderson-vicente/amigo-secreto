//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Inicialização da lista de amigos
let listaDeAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
  // Obter o valor do campo de entrada
  const inputAmigo = document.getElementById('amigo');
  const nomeAmigo = inputAmigo.value.trim();

  // Validar se o campo está vazio
  if (nomeAmigo === '') {
    alert('Por favor, insira um nome válido!');
    return;
  }
  
  
  // Adicionar o nome à lista
  listaDeAmigos.push(nomeAmigo);

  // Limpar o campo de entrada
  inputAmigo.value = '';
  
  // Atualizar a lista visível
  atualizarListaVisivel();

  console.log(listaDeAmigos);


  // Coloca o foco no campo de entrada
  inputAmigo.focus();
   

}

function atualizarListaVisivel() {
  const listaAmigosElement = document.getElementById('listaAmigos');
  
  // Limpar a lista atual
  listaAmigosElement.innerHTML = '';
  
  // Adicionar cada amigo como um item da lista
  listaDeAmigos.forEach((amigo) => {
      const li = document.createElement('li');
      li.textContent = amigo;
      listaAmigosElement.appendChild(li);
  });
  
  // Limpar o resultado anterior, se existir
  document.getElementById('resultado').innerHTML = '';
}