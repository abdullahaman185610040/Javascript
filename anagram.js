function isAnagram(kata_1, kata_2) {
    // Mengubah kedua kata menjadi huruf kecil dan menghapus spasi
    kata_1 = kata_1.toLowerCase().replace(/\s+/g, "");
    kata_2 = kata_2.toLowerCase().replace(/\s+/g, "");
  
    // Mengecek apakah panjang kedua kata sama
    if (kata_1.length !== kata_2.length) {
      return false;
    }
  
    // Menghitung jumlah kemunculan setiap huruf dalam kata_1
    const charCount = {};
    for (let char of kata_1) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // Memeriksa apakah jumlah kemunculan setiap huruf dalam kata_1 sama dengan kata_2
    for (let char of kata_2) {
      if (!charCount[char]) {
        return false;
      }
      charCount[char]--;
    }
  
    return true;
  }
  
  // Contoh penggunaan fungsi:
  const kata1 = "listen";
  const kata2 = "silent";
  const result = isAnagram(kata1, kata2);
  console.log("Apakah kata_1 dan kata_2 adalah anagram? " + result);
  