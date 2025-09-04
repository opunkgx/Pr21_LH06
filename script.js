document.addEventListener('DOMContentLoaded', function() {

    const totalColumns = 28; // Jumlah total kolom yang akan dihitung

    // Fungsi untuk menghitung total satu kolom
    function calculateColumnTotal(columnIndex) {
        // Memilih semua input yang berada di kolom yang sama
        const inputs = document.querySelectorAll(`input[data-column="${columnIndex}"]`);
        
        let total = 0;
        inputs.forEach(input => {
            // Mengambil nilai dari input, mengubahnya menjadi angka
            // Jika input kosong, dianggap sebagai 0
            const value = parseFloat(input.value) || 0;
            total += value;
        });

        // Menemukan sel total di bagian footer
        const totalCell = document.getElementById(`total-col-${columnIndex}`);
        if (totalCell) {
            // Menampilkan hasil dengan 2 angka desimal
            totalCell.textContent = total.toFixed(2);
        }
    }

    // Menghitung total untuk semua kolom saat halaman pertama kali dimuat
    function initializeTotals() {
        for (let i = 1; i <= totalColumns; i++) {
            calculateColumnTotal(i);
        }
    }

    // Menambahkan 'event listener' ke semua input di dalam tabel
    const allInputs = document.querySelectorAll('tbody input[type="number"]');
    allInputs.forEach(input => {
        // Setiap kali ada input/perubahan, panggil fungsi kalkulasi ulang
        input.addEventListener('input', function() {
            const column = this.dataset.column;
            calculateColumnTotal(column);
        });
    });

    // Panggil fungsi inisialisasi untuk menampilkan total awal
    initializeTotals();

});
