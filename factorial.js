function hitungFaktorial(bilangan) {
    // Faktorial dari 0 dan 1 adalah 1
    if (bilangan === 0 || bilangan === 1) {
      return 1;
    }
  
    // Menghitung faktorial dari bilangan
    let faktorial = 1;
    for (let i = 2; i <= bilangan; i++) {
      faktorial *= i;
    }
  
    return faktorial;
  }
  
  // Contoh penggunaan fungsi:
  const bilangan = 5;
  const hasilFaktorial = hitungFaktorial(bilangan);
  console.log("Hasil Faktorial: " + hasilFaktorial);
  