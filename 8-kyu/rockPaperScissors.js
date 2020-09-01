// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

const rps = (p1, p2) => {
  let rules = { scissors: "paper", rock: "scissors", paper: "rock" };

  if (rules[p2] === p1) {
    return "Player 2 won!";
  }
  if (rules[p1] === p2) {
    return "Player 1 won!";
  } else {
    return "Draw!";
  }
};
