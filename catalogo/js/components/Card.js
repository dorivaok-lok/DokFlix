// Importa funções utilitárias para gerar dados aleatórios dos cards
import { getYouTubeId, getRandomMatchScore, getRandomDuration, getRandomAgeBadge } from '../utils.js';

// Constantes
const THUMB_BASE = 'https://img.youtube.com/vi/';

// Cria um elemento de card (filme/série) com imagem, detalhes e preview de vídeo
export function createCard(item) {
    // Cria o container principal do card
    const card = document.createElement('div');
    card.className = 'movie-card';
    // Se o item tem progresso de visualização, adiciona a classe 'has-progress'
    if (item.progress) {
        card.classList.add('has-progress');
    }

    // Extrai o ID do vídeo YouTube
    const videoId = getYouTubeId(item.youtube);

    // Cria a imagem do filme/série
    const img = document.createElement('img');
    img.src = item.img ? item.img : `${THUMB_BASE}${videoId}/maxresdefault.jpg`;
    img.alt = `Movie cover`;
    img.loading = 'lazy';
    img.dataset.thumbnailStage = item.img ? 'custom' : 'max';
    img.onerror = function() {
        if (this.dataset.thumbnailStage === 'max') {
            this.dataset.thumbnailStage = 'hq';
            this.src = `${THUMB_BASE}${videoId}/hqdefault.jpg`;
        } else if (this.dataset.thumbnailStage === 'hq') {
            this.dataset.thumbnailStage = 'mq';
            this.src = `${THUMB_BASE}${videoId}/mqdefault.jpg`;
        } else if (this.dataset.thumbnailStage === 'custom') {
            this.dataset.thumbnailStage = 'hq';
            this.src = `${THUMB_BASE}${videoId}/hqdefault.jpg`;
        } else {
            this.dataset.thumbnailStage = 'placeholder';
            this.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22250%22%20height%3D%22140%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%22250%22%20height%3D%22140%22%20fill%3D%22%23111111%22/%3E%3Ctext%20x%3D%22125%22%20y%3D%2275%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2214%22%20fill%3D%22%23ffffff%22%20text-anchor%3D%22middle%22%3ESem%20thumbnail%3C/text%3E%3C/svg%3E';
        }
    };

    // Cria um iframe para reproduzir o vídeo do YouTube ao passar o mouse
    const iframe = document.createElement('iframe');
    iframe.frameBorder = "0";
    iframe.allow = "autoplay; encrypted-media";
    iframe.loading = 'lazy';

    // Adiciona o iframe e a imagem ao card
    card.appendChild(iframe);
    card.appendChild(img);

    // Gera um badge de classificação etária aleatório
    const ageBadge = getRandomAgeBadge();

    // Cria o container para os detalhes do card (botões, info, tags)
    const details = document.createElement('div');
    details.className = 'card-details';
    details.innerHTML = `
        <div class="details-buttons">
            <div class="left-buttons">
                <button class="btn-icon btn-play-icon"><i class="fas fa-play" style="margin-left:2px;"></i></button>
                ${item.progress ? '<button class="btn-icon"><i class="fas fa-check"></i></button>' : '<button class="btn-icon"><i class="fas fa-plus"></i></button>'}
                <button class="btn-icon"><i class="fas fa-thumbs-up"></i></button>
            </div>
            <div class="right-buttons">
                <button class="btn-icon"><i class="fas fa-chevron-down"></i></button>
            </div>
        </div>
        <div class="details-info">
            <span class="match-score">${getRandomMatchScore()}% relevante</span>
            <span class="age-badge ${ageBadge.class}">${ageBadge.text}</span>
            <span class="duration">${getRandomDuration(item.progress)}</span>
            <span class="resolution">HD</span>
        </div>
        <div class="details-tags">
            <span>Empolgante</span>
            <span>Animação</span>
            <span>Ficção</span>
        </div>
    `;
    card.appendChild(details);

    // Event for play button
    const playBtn = details.querySelector('.btn-play-icon');
    playBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const modal = document.getElementById('video-modal');
        const modalIframe = document.getElementById('modal-iframe');
        modalIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1`;
        modal.style.display = 'block';
    });


    // Se o item tem progresso de visualização, cria uma barra de progresso
    if (item.progress) {
        const pbContainer = document.createElement('div');
        pbContainer.className = 'progress-bar-container';
        const pbValue = document.createElement('div');
        pbValue.className = 'progress-value';
        pbValue.style.width = `${item.progress}%`; // Define a largura da barra com base no progresso
        pbContainer.appendChild(pbValue);
        card.appendChild(pbContainer);
    }

    // Variável para controlar o timeout do preview de vídeo
    let playTimeout;
    // Quando o mouse entra no card, reproduz um preview do vídeo
    card.addEventListener('mouseenter', () => {
        // Verifica a posição do card na tela para definir a origem da expansão
        const rect = card.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        
        // Se o card está perto da borda esquerda, expande para direita
        if (rect.left < 100) {
            card.classList.add('origin-left');
        } else if (rect.right > windowWidth - 100) {
            // Se o card está perto da borda direita, expande para esquerda
            card.classList.add('origin-right');
        }

        // Aguarda 600ms antes de começar a reproduzir o vídeo
        playTimeout = setTimeout(() => {
            // Carrega e reproduz automaticamente o vídeo do YouTube (sem som)
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${videoId}`;
            iframe.classList.add('playing');
            img.classList.add('playing-video');
        }, 600);
    });

    // Quando o mouse sai do card, para o preview do vídeo
    card.addEventListener('mouseleave', () => {
        // Cancela o timeout se o vídeo ainda não começou
        clearTimeout(playTimeout);
        // Remove as classes de reprodução
        iframe.classList.remove('playing');
        img.classList.remove('playing-video');
        // Limpa o iframe removendo a src
        iframe.src = "";
        // Remove as classes de origem para resetar a posição
        card.classList.remove('origin-left');
        card.classList.remove('origin-right');
    });

    return card;
}
