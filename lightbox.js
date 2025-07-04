const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const images = document.querySelectorAll('.scroller__inner img');

images.forEach(img => {
    img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.remove('hidden');
    });
});

// Close lightbox on click or ESC
lightbox.addEventListener('click', () => {
    lightbox.classList.add('hidden');
    lightboxImg.src = '';
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
    lightbox.classList.add('hidden');
    lightboxImg.src = '';
    }
});