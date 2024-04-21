// Deklarasi Tombol
const tombol = document.querySelector('.tombol');
const menu = document.querySelector('.menu');

// Sistem Click
tombol.addEventListener('click', () => {
    menu.classList.toggle('aktif');
});