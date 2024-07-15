const rpmTest = require('../RPS.js');

describe("The 'whoWon' function", function () {
  test("returns 'TIE!' if both players choose the same option", function () {
    expect(rpmTest.whoWon('rock', 'rock')).toEqual('TIE!');
  });

  test("returns 'Player 2 wins!' if player 2 wins", function () {
    expect(rpmTest.whoWon('rock', 'paper')).toEqual('Player 2 wins!');
  });

  test("returns 'Player 2 wins!' if player 2 wins", function () {
    expect(rpmTest.whoWon('paper', 'scissors')).toEqual('Player 2 wins!');
  });

  test("returns 'Player 2 wins!' if player 2 wins", function () {
    expect(rpmTest.whoWon('scissors', 'rock')).toEqual('Player 2 wins!');
  });
  test("should return 'Not a valid input' if the input is not 'rock', 'paper', or 'scissors'", function () {
    expect(rpmTest.whoWon('', '')).toEqual(
      'Invalid input. Please enter rock, paper, or scissors.',
    );
    expect(rpmTest.whoWon('rock', '')).toEqual(
      'Invalid input. Please enter rock, paper, or scissors.',
    );
    expect(rpmTest.whoWon('dog', 'cat')).toEqual(
      'Invalid input. Please enter rock, paper, or scissors.',
    );
  });
});
