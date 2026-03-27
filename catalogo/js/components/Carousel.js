// Importa a função para criar cards individuais
import { createCard } from './Card.js';

// Cria um carrossel (seção) com título, indicadores e cards para uma categoria
export function createCarousel(category) {
    // Cria o container principal da seção do carrossel
    const section = document.createElement('div');
    section.className = 'slider-section';

    // Cria o header do carrossel com título e indicadores
    const header = document.createElement('div');
    header.className = 'slider-header';

    // Cria o título do carrossel baseado na categoria
    const title = document.createElement('h2');
    title.className = 'slider-title';
    title.innerText = category.title;

    // Cria o container para os indicadores de visualização
    const indicators = document.createElement('div');
    indicators.className = 'slider-indicators';

    // Adiciona título e indicadores ao header
    header.appendChild(title);
    header.appendChild(indicators);
    // Adiciona o header à seção
    section.appendChild(header);

    // Cria o container para os cards do carrossel
    const row = document.createElement('div');
    row.className = 'movie-row';

    // Para cada item da categoria, cria um card e adiciona à linha
    category.items.forEach(item => {
        // Cria um novo card para o item
        const card = createCard(item);
        // Adiciona o card à linha
        row.appendChild(card);
    });

    // Adiciona a linha de cards à seção
    section.appendChild(row);
    // Retorna a seção completa do carrossel
    return section;
}
