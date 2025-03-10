// Função para carregar componentes dinamicamente
function loadComponent(url, elementId) {
    return fetch(url)
      .then(response => response.text())
      .then(data => {
        document.getElementById(elementId).innerHTML = data;
      })
      .catch(error => console.error("Erro ao carregar o componente:", error));
  }
  
 
  // Função para adicionar/remover classe 'fixed-top' com base no scroll
  function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('fixed-top', 'scrolled');
    } else {
      navbar.classList.remove('fixed-top', 'scrolled');
    }
  }
  
  // Adiciona o evento de scroll para a navbar
  window.addEventListener('scroll', handleNavbarScroll);
  
  // Função para atualizar a data e a hora
  function updateDateTime() {
    const now = new Date();
  
    // Formatação da Data
    const optionsDate = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };
    const formattedDate = now.toLocaleDateString('pt-BR', optionsDate);
  
    // Formatação do Horário
    const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedTime = now.toLocaleTimeString('pt-BR', optionsTime);
  
    // Atualiza os elementos na página
    const dateElement = document.getElementById('current-date');
    const timeElement = document.getElementById('current-time');
  
    if (dateElement.textContent !== formattedDate) {
      dateElement.textContent = formattedDate;
    }
  
    if (timeElement.textContent !== formattedTime) {
      timeElement.textContent = formattedTime;
    }
  }
  
  // Atualiza o relógio a cada segundo sem piscar
  setInterval(updateDateTime, 1000);
  updateDateTime();
  
  // Função para alterar tamanho da fonte do body
  function changeFontSize(action) {
    const body = document.body;
    // Pega o tamanho de fonte atual do body (caso não definido, pega do CSS)
    let currentSize = parseFloat(window.getComputedStyle(body).fontSize);
  
    if (action === 'increase') {
      body.style.fontSize = (currentSize + 1) + 'px';
    } else if (action === 'decrease') {
      body.style.fontSize = (currentSize - 1) + 'px';
    } else if (action === 'reset') {
      // Reseta para o valor padrão (removendo style inline)
      body.style.fontSize = '';
    }
  }
  
  // Animação para os botões do card
  document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button-card');
    buttons.forEach((button, index) => {
      setTimeout(() => {
        button.classList.add('visible');
      }, index * 100); // Atraso para cada botão
    });
  });
  