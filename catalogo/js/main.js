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
    
    // Função para renderizar carrosséis
    function renderCarousels(cats) {
        if (container) {
            container.innerHTML = ''; // Clear existing
            cats.forEach(category => {
                // Cria um carrossel para a categoria
                const carousel = createCarousel(category);
                // Adiciona o carrossel ao container
                container.appendChild(carousel);
            });
        }
    }

    // Renderiza inicialmente todos os carrosséis
    renderCarousels(categories);

    // Modal close
    const modal = document.getElementById('video-modal');
    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.getElementById('modal-iframe').src = '';
        });
    }
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.getElementById('modal-iframe').src = '';
        }
    });

    // Busca
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            if (query) {
                const filteredCategories = categories.map(cat => ({
                    ...cat,
                    items: cat.items.filter(item => 
                        cat.title.toLowerCase().includes(query) || 
                        item.youtube.toLowerCase().includes(query) ||
                        (item.badge && item.badge.toLowerCase().includes(query))
                    )
                })).filter(cat => cat.items.length > 0);
                renderCarousels(filteredCategories);
            } else {
                renderCarousels(categories);
            }
        });
    }
    // Fim do evento DOMContentLoaded
});
