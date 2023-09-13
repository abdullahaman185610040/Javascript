function solution(jumlahApel, hargaPerKilogram) {
    // Menghitung total penjualan apel dengan rumus Jumlah Apel x Harga per Kilogram Apel
    return jumlahApel * hargaPerKilogram;
  }
  
  // Contoh penggunaan fungsi:
  const jumlahApelTerjual = 10; // misalnya, jumlah apel yang terjual adalah 10 kg
  const hargaPerKilogramApel = 5000; // misalnya, harga per kilogram apel adalah 5000 rupiah
  const totalPenjualanApel = solution(jumlahApelTerjual, hargaPerKilogramApel);
  console.log("Total Penjualan Apel: " + totalPenjualanApel + " rupiah");
  