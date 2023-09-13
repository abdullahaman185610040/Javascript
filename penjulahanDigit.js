function penjumlahanDigit(num) {
    while (num >= 10) {
      let sum = 0;
      // Menghitung penjumlahan digit dari angka num
      while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
      }
      num = sum;
    }
    return num;
  }
  
  // Contoh penggunaan fungsi:
  const angka = 12345;
  const hasilPenjumlahanDigit = penjumlahanDigit(angka);
  console.log("Hasil Penjumlahan Digit: " + hasilPenjumlahanDigit);
  