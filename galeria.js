document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const closeBtn = document.querySelector('.close'); // Usando querySelector para o botão de fechar

    galleryItems.forEach(item => {
        item.addEventListener('click', (event) => {
            modal.style.display = 'block';
            modalImg.src = event.target.src;
        });
    });

    // Fechar o modal quando o botão de fechar é clicado
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fechar o modal quando se clica fora da imagem
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Fechar o modal quando a tecla Esc é pressionada
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            modal.style.display = 'none';
        }
    });
});