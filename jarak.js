function solution(jarak, waktu) {
    // Menghitung jarak dengan rumus Jarak = Kecepatan × Waktu
    // Dalam kasus ini, kita anggap kecepatan adalah tetap, sehingga kecepatan bisa diabaikan
    return jarak / waktu;
  }
  
  // Contoh penggunaan fungsi:
  const jarak = 100; // misalnya, jarak dalam kilometer
  const waktu = 2; // misalnya, waktu dalam jam
  const hasil = solution(jarak, waktu); // Memanggil fungsi untuk menghitung jarak
  console.log("Hasil: " + hasil + " km/jam");
  