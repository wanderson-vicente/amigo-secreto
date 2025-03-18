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
  listaDeAmigos.forEach((amigo, index) => {
    const li = document.createElement('li');
    li.textContent = amigo + " ";
    
    // Adicionar botão de exclusão simples
    const btnExcluir = document.createElement('button');
    btnExcluir.textContent = 'X';
    btnExcluir.style.marginLeft = '10px';
    btnExcluir.style.border = 'none';
    btnExcluir.style.color = '#fe652b';
    btnExcluir.onclick = function() {
        listaDeAmigos.splice(index, 1);
        atualizarListaVisivel();
    };
    
    li.appendChild(btnExcluir);
    listaAmigosElement.appendChild(li);
  });
  
  
  // Limpar o resultado anterior, se existir
  document.getElementById('resultado').innerHTML = '';
}

function sortearAmigo() {
  // Verificar se há pelo menos 4 pessoas na lista
  if (listaDeAmigos.length < 4) {
      alert('É necessário no mínimo 4 pessoas para o sorteio.');
      return;
  }
  
  // Gerar um índice aleatório
  const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
  
  // Obter o amigo sorteado
  const amigoSorteado = listaDeAmigos[indiceAleatorio];
  
  // Exibir o resultado
  const resultadoElement = document.getElementById('resultado');
  resultadoElement.innerHTML = `🎉 ${amigoSorteado} 🎉`;
}

// Adicionar event listener para permitir adicionar informação com a tecla Enter
document.getElementById('amigo').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
      adicionarAmigo();
  }
});