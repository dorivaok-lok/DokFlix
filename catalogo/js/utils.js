// Extrai o ID do vídeo YouTube a partir da URL
// Retorna um ID padrão se a URL for inválida
export function getYouTubeId(url) {
    if (!url || typeof url !== 'string') return "7RUA0IOfar8"; // ID padrão
    try {
        if (url.includes('v=')) {
            return url.split('v=')[1].split('&')[0];
        }
        if (url.includes('youtu.be/')) {
            return url.split('youtu.be/')[1].split('?')[0];
        }
        if (url.includes('/embed/')) {
            return url.split('/embed/')[1].split('?')[0];
        }
        return url.split('/').pop().split('?')[0];
    } catch (e) {
        return "7RUA0IOfar8";
    }
}

// Gera um percentual aleatório de relevância entre 80% e 100%
export function getRandomMatchScore() {
    return Math.floor(Math.random() * 20 + 80);
}

// Retorna uma duração aleatória
// Se o item tem progresso, retorna número de temporadas; caso contrário, retorna horas e minutos
export function getRandomDuration(hasProgress) {
    return hasProgress ? '10 temporadas' : '2h ' + Math.floor(Math.random() * 59) + 'm';
}

// Gera um badge de classificação etária aleatório (A16 ou 16)
export function getRandomAgeBadge() {
    return Math.random() > 0.5 ? { text: 'A16', class: 'red-accent' } : { text: '16', class: '' };
}
