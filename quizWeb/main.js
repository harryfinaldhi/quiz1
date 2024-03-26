function ubahGambar(id) {
    var gambar = document.getElementById(id);
    // Lakukan pengecekan sederhana untuk menentukan gambar mana yang akan ditampilkan berikutnya
    if (gambar.src.endsWith("makan1.jpeg")) {
        gambar.src = "makan2.jpeg";
    } else if (gambar.src.endsWith("makan2.jpeg")) {
        gambar.src = "makan3.jpeg";
    } else {
        gambar.src = "makan1.jpeg";
    }
}
