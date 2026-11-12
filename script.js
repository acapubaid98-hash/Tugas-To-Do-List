// 1. Inisialisasi Array kosong
let toDoArray = [];

// 2. Tangkap Elemen DOM berdasarkan ID
let inputTugas = document.getElementById("inputTugas");
let btnTambah = document.getElementById("btnTambah");
let areaArray = document.getElementById("areaArray");

// 3. Event Listener saat tombol Tambah diklik
btnTambah.onclick = function() {
    
    // Validasi Input: Cek apakah input kosong
    if (inputTugas.value === "") {
        alert("tugas tidak boleh kosong");
        return; // Hentikan fungsi
    }

    // Tambah ke Array menggunakan .push()
    toDoArray.push(inputTugas.value);
    console.log(inputTugas.value);

    // Bersihkan Input (kosongkan kembali)
    inputTugas.value = "";

    // 4. Render List dengan for Loop
    let isiHTML = '<ul class="list-group">';

    for (let i = 0; i < toDoArray.length; i++) {
        isiHTML += '<li class="list-group-item">' + toDoArray[i] + '</li>';
    }

    isiHTML += '</ul>';

    // Masukkan hasil ke dalam innerHTML area penampung
    areaArray.innerHTML = isiHTML;
};