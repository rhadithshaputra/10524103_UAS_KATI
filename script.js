function buatPesanan() {
    let nama = document.getElementById("nama").value;
    let produk = document.getElementById("produk").value;
    let jumlah = document.getElementById("jumlah").value;
    let alamat = document.getElementById("alamat").value;

    if (nama && produk && jumlah && alamat) {
        localStorage.setItem("nama", nama);
        localStorage.setItem("produk", produk);
        localStorage.setItem("jumlah", jumlah);
        localStorage.setItem("alamat", alamat);
        window.location.href = "invoice.html";
    } else {
        alert("Harap isi semua data!");
    }
}

function tampilkanInvoice() {
    document.getElementById("invNama").innerText = localStorage.getItem("nama");
    document.getElementById("invProduk").innerText = localStorage.getItem("produk");
    document.getElementById("invJumlah").innerText = localStorage.getItem("jumlah");
    document.getElementById("invAlamat").innerText = localStorage.getItem("alamat");
}