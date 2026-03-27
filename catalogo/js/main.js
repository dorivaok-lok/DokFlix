// Importa os dados das categorias de filmes
import { categories } from './data.js';
// Importa a função para criar carrosséis
import { createCarousel } from './components/Carousel.js';

// Espera o carregamento completo do DOM antes de executar o código
document.addEventListener('DOMContentLoaded', () => {
    // Recupera o nome e imagem do perfil armazenados no localStorage
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    // Se houver dados do perfil, atualiza o nome e imagem na navbar
    if (nomePerfil && imagemPerfil) {
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');
        
        // Atualiza o nome do perfil na navbar
        if (kidsLink) kidsLink.textContent = nomePerfil;
        // Atualiza a imagem do perfil na navbar
        if (profileIcon) profileIcon.src = imagemPerfil;
    }

    // Seleciona o container principal onde os carrosséis serão inseridos
    const container = document.getElementById('main-content');
    
    // Para cada categoria, cria um carrossel e adiciona ao DOM
    if (container) {
        categories.forEach(category => {
            // Cria um carrossel para a categoria
            const carousel = createCarousel(category);
            // Adiciona o carrossel ao container
            container.appendChild(carousel);
        });
    }
    // Fim do evento DOMContentLoaded
});
