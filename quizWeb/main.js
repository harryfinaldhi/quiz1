var gambarSebelumnya = null;
var isImageChanged = false;

function ubahGambar(id) {
    var kenyangImage = document.getElementById("kenyangImage");
    var gambar = document.getElementById(id);
    var body = document.body;
    
    if (!isImageChanged) {
        gambarSebelumnya = gambar.src;
        kenyangImage.src = "kenyang.jpeg";
        isImageChanged = true;
        body.style.backgroundColor = "lightblue"; // Ubah warna latar belakang ke lightblue
    } else {
        kenyangImage.src = gambarSebelumnya;
        isImageChanged = false;
        body.style.backgroundColor = ""; // Kembalikan warna latar belakang ke default
    }
}

function kembaliGambar() {
    var kenyangImage = document.getElementById("kenyangImage");
    var body = document.body;
    
    if (isImageChanged) {
        kenyangImage.src = gambarSebelumnya;
        isImageChanged = false;
        body.style.backgroundColor = ""; // Kembalikan warna latar belakang ke default
    }
}
document.getElementById("changeColorButton").addEventListener("click", function() {
    var body = document.body;
    // Cek warna latar belakang
    var currentColor = window.getComputedStyle(body).getPropertyValue("background-color");
    // Jika warna saat ini adalah putih, maka ubah menjadi biru, jika tidak, kembalikan ke putih
    body.style.backgroundColor = (currentColor === "rgb(255, 255, 255)") ? "blue" : "white";
});
