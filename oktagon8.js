function hitungLuasOktagon(luasSegitiga) {
    // Setiap oktagon memiliki 8 segitiga sama sisi yang identik
    const jumlahSegitiga = 8;
  
    // Menghitung luas oktagon berdasarkan luas segitiga
    const luasOktagon = luasSegitiga * jumlahSegitiga;
  
    return luasOktagon;
  }
  
  // Contoh penggunaan fungsi:
  const luasSegitiga = 5;
  const luasOktagon = hitungLuasOktagon(luasSegitiga);
  console.log("Luas Oktagon: " + luasOktagon);
  