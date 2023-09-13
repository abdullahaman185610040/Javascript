function handGameResult(player_1, player_2) {
    if (player_1 === player_2) {
      return "DRAW";
    } else if (
      (player_1 === "ROCK" && player_2 === "SCISSORS") ||
      (player_1 === "PAPER" && player_2 === "ROCK") ||
      (player_1 === "SCISSORS" && player_2 === "PAPER")
    ) {
      return "PLAYER 1 WIN";
    } else {
      return "PLAYER 2 WIN";
    }
  }
  
  // Contoh penggunaan fungsi:
  const player1Choice = "ROCK";
  const player2Choice = "SCISSORS";
  const result = handGameResult(player1Choice, player2Choice);
  console.log("Hasil: " + result);
  