function getMinMax(arr) {
    // Mencari nilai terkecil dan terbesar dari array
    const minValue = Math.min(...arr);
    const maxValue = Math.max(...arr);
  
    // Mengembalikan array baru yang berisi nilai terkecil dan terbesar
    return [minValue, maxValue];
  }
  
  // Contoh penggunaan fungsi:
  const inputArray = [1, 2, 3, 4, 5];
  const resultArray = getMinMax(inputArray);
  console.log("Hasil: " + resultArray);
  