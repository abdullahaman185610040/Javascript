function hitungHargaSeblak(makaroni, mie, telur, lidah) {
    // Daftar harga topping
    const hargaMakaroni = 1000;
    const hargaMie = 2000;
    const hargaTelur = 2000;
    const hargaLidah = 5000;
  
    // Menghitung total harga seblak berdasarkan jumlah topping
    const totalHarga = makaroni * hargaMakaroni + mie * hargaMie + telur * hargaTelur + lidah * hargaLidah;
  
    return totalHarga;
  }
  
  // Contoh penggunaan fungsi:
  const makaroni = 1;
  const mie = 4;
  const telur = 2;
  const lidah = 1;
  const totalHargaSeblak = hitungHargaSeblak(makaroni, mie, telur, lidah);
  console.log("Total Harga Seblak: " + totalHargaSeblak);
  