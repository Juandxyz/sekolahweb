// Fungsi untuk menampilkan/menyembunyikan tombol kembali ke atas berdasarkan posisi scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var backButton = document.getElementById("backToTopBtn");

    // Jika posisi scroll lebih besar dari 20px, maka tombol akan ditampilkan
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backButton.style.display = "block";
    } else {
        backButton.style.display = "none";
    }
}

// Fungsi untuk kembali ke atas halaman dengan animasi perlahan
function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
