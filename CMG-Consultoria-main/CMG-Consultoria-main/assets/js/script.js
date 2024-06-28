'use strict';

/**
 * Variáveis da navbar
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("active");
});

// Função para mostrar o card com animação
function showCard() {
  var card = document.getElementById('info-card');
  card.style.display = 'block';
  setTimeout(function() {
      card.style.transform = 'translate(-50%, -50%) scale(1)';
      card.style.opacity = '1';
  }, 10); // Pequeno delay para permitir a transição
}

// Função para esconder o card com animação
function hideCard() {
  var card = document.getElementById('info-card');
  card.style.transform = 'translate(-50%, -50%) scale(0)';
  card.style.opacity = '0';
  setTimeout(function() {
      card.style.display = 'none';
  }, 500); // Tempo para a transição completar antes de esconder
}

// Event listener para exibir o card e o overlay ao clicar no botão "Saiba mais"
document.getElementById('saiba-mais-btn').addEventListener('click', function() {
  document.getElementById('overlay').style.display = 'block';
  showCard();
});

// Event listener para esconder o card e o overlay ao clicar no botão "X"
document.getElementById('close-card-btn').addEventListener('click', function() {
  document.getElementById('overlay').style.display = 'none';
  hideCard();
});

// Event listener para esconder o card e o overlay ao clicar no overlay
document.getElementById('overlay').addEventListener('click', function() {
  document.getElementById('overlay').style.display = 'none';
  hideCard();
});

// Função para mostrar o card com animação
function showCardVejaMais() {
  var card = document.getElementById('card-veja-mais');
  card.style.display = 'block';
  setTimeout(function() {
      card.style.transform = 'translate(-50%, -50%) scale(1)';
      card.style.opacity = '1';
  }, 10); // Pequeno delay para permitir a transição
}

// Função para esconder o card com animação
function hideCardVejaMais() {
  var card = document.getElementById('card-veja-mais');
  card.style.transform = 'translate(-50%, -50%) scale(0)';
  card.style.opacity = '0';
  setTimeout(function() {
      card.style.display = 'none';
  }, 500); // Tempo para a transição completar antes de esconder
}

// Event listener para exibir o card e o overlay ao clicar no link "Veja mais"
document.getElementById('veja-mais-link').addEventListener('click', function(event) {
  event.preventDefault(); // Previne o comportamento padrão do link
  document.getElementById('overlay-veja-mais').style.display = 'block';
  showCardVejaMais();
});

// Event listener para esconder o card e o overlay ao clicar no botão "X"
document.getElementById('close-card-veja-mais').addEventListener('click', function() {
  document.getElementById('overlay-veja-mais').style.display = 'none';
  hideCardVejaMais();
});

// Event listener para esconder o card e o overlay ao clicar no overlay
document.getElementById('overlay-veja-mais').addEventListener('click', function() {
  document.getElementById('overlay-veja-mais').style.display = 'none';
  hideCardVejaMais();
});

// Função para mostrar o card com animação
function showCardVejaMais2() {
  var card = document.getElementById('card-veja-mais-2');
  card.style.display = 'block';
  setTimeout(function() {
      card.style.transform = 'translate(-50%, -50%) scale(1)';
      card.style.opacity = '1';
  }, 10); // Pequeno delay para permitir a transição
}

// Função para esconder o card com animação
function hideCardVejaMais2() {
  var card = document.getElementById('card-veja-mais-2');
  card.style.transform = 'translate(-50%, -50%) scale(0)';
  card.style.opacity = '0';
  setTimeout(function() {
      card.style.display = 'none';
  }, 500); // Tempo para a transição completar antes de esconder
}

// Event listener para exibir o card e o overlay ao clicar no link "Veja mais"
document.getElementById('veja-mais-link-2').addEventListener('click', function(event) {
  event.preventDefault(); // Previne o comportamento padrão do link
  document.getElementById('overlay-veja-mais-2').style.display = 'block';
  showCardVejaMais2();
});

// Event listener para esconder o card e o overlay ao clicar no botão "X"
document.getElementById('close-card-veja-mais-2').addEventListener('click', function() {
  document.getElementById('overlay-veja-mais-2').style.display = 'none';
  hideCardVejaMais2();
});

// Event listener para esconder o card e o overlay ao clicar no overlay
document.getElementById('overlay-veja-mais-2').addEventListener('click', function() {
  document.getElementById('overlay-veja-mais-2').style.display = 'none';
  hideCardVejaMais2();
});

// Função para esconder a tela de carregamento
function hideLoadingScreen() {
  document.getElementById('loading-screen').style.display = 'none';
}

// Esconde a tela de carregamento após 2 segundos
window.onload = function() {
  setTimeout(hideLoadingScreen, 2000); // Mantém a tela de carregamento por 2 segundos
}
