
/**
 * Arquivo principal de JavaScript para o site G3NET
 * Contém todas as funcionalidades interativas do site
 */

// Aguarda o carregamento completo do DOM antes de executar scripts
document.addEventListener('DOMContentLoaded', function() {
  // Código para controlar o menu móvel
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      
      // Altera o ícone do menu entre hambúrguer e X
      const menuIcon = menuToggle.querySelector('.menu-icon');
      
      if (mobileMenu.classList.contains('active')) {
        menuIcon.style.backgroundColor = 'transparent';
        menuIcon.style.transform = 'rotate(45deg)';
        
        if (menuIcon.style.transition !== 'all 0.3s ease') {
          menuIcon.style.transition = 'all 0.3s ease';
        }
        
        if (menuIcon.before) {
          menuIcon.before.style.transform = 'rotate(90deg)';
          menuIcon.before.style.top = '0';
        }
        
        if (menuIcon.after) {
          menuIcon.after.style.transform = 'rotate(90deg)';
          menuIcon.after.style.bottom = '0';
        }
      } else {
        menuIcon.style.backgroundColor = '';
        menuIcon.style.transform = '';
        
        if (menuIcon.before) {
          menuIcon.before.style.transform = '';
          menuIcon.before.style.top = '';
        }
        
        if (menuIcon.after) {
          menuIcon.after.style.transform = '';
          menuIcon.after.style.bottom = '';
        }
      }
    });
  }
  
  // Adiciona o ano atual no rodapé
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  
  // Código para o formulário de contato
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Simulação de envio do formulário
      const formData = new FormData(contactForm);
      const formValues = {};
      
      for (let [key, value] of formData.entries()) {
        formValues[key] = value;
      }
      
      console.log('Formulário enviado:', formValues);
      
      // Feedback para o usuário (normalmente seria uma chamada AJAX real)
      alert('Obrigado pelo contato! Em breve entraremos em contato.');
      contactForm.reset();
    });
  }
  
  // Animação suave para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Adiciona classe de ativo ao link da navegação com base na URL atual
  const currentPage = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link, .mobile-link');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    
    if (currentPage === linkPath || 
        (currentPage === '/' && linkPath === '/') ||
        (currentPage.includes(linkPath) && linkPath !== '/')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
  
  // Aplicar animações de entrada para elementos
  const fadeElements = document.querySelectorAll('.fade-in');
  
  // Função para verificar se um elemento está visível na tela
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }
  
  // Função para adicionar classe de animação aos elementos visíveis
  function handleScrollAnimations() {
    fadeElements.forEach(element => {
      if (isElementInViewport(element) && !element.classList.contains('animated')) {
        element.classList.add('animated');
        element.style.animation = 'fadeIn 0.5s ease-out forwards';
      }
    });
  }
  
  // Inicializar animações no carregamento
  handleScrollAnimations();
  
  // Adicionar animações ao rolar a página
  window.addEventListener('scroll', handleScrollAnimations);
  
  // Implementação para o menu de navegação fixo ao rolar
  const navbar = document.querySelector('.navbar');
  let scrollPosition = 0;
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      navbar.style.boxShadow = 'var(--shadow-md)';
    } else {
      navbar.style.boxShadow = 'var(--shadow-sm)';
    }
    
    if (currentScroll > scrollPosition && currentScroll > 200) {
      // Rolando para baixo e já passou do cabeçalho
      navbar.style.transform = 'translateY(-100%)';
    } else {
      // Rolando para cima
      navbar.style.transform = 'translateY(0)';
    }
    
    scrollPosition = currentScroll;
  });
  
  // Código para menu de ícones do menu mobile
  function setupMenuIcon() {
    const menuIcons = document.querySelectorAll('.menu-icon');
    
    menuIcons.forEach(icon => {
      // Criar os elementos pseudo before e after programaticamente
      // já que o CSS ::before e ::after não podem ser manipulados diretamente via JS
      const before = document.createElement('span');
      before.style.position = 'absolute';
      before.style.width = '24px';
      before.style.height = '2px';
      before.style.backgroundColor = 'var(--gray-800)';
      before.style.top = '-8px';
      before.style.transition = 'var(--transition-normal)';
      
      const after = document.createElement('span');
      after.style.position = 'absolute';
      after.style.width = '24px';
      after.style.height = '2px';
      after.style.backgroundColor = 'var(--gray-800)';
      after.style.bottom = '-8px';
      after.style.transition = 'var(--transition-normal)';
      
      // Adicionar os pseudo-elementos ao ícone
      icon.appendChild(before);
      icon.appendChild(after);
      
      // Guardar referências aos elementos para animação
      icon.before = before;
      icon.after = after;
    });
  }
  
  setupMenuIcon();
});
