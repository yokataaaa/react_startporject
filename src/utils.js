const HANDS = [
  'rock',
  'scissor',
  'paper',
];

const WINS = {
  rock: 'scissor',
  scissor: 'paper',
  paper: 'rock',
};

function generateRandomHand() {
  const n = Math.ceil(Math.random() * 3);
  return HANDS[n - 1];
}

function compareHand(me, other) {
  if (WINS[me] === other) return '승리';
  else if (WINS[other] === me) return '패배';
  return '무승부';
}

export { generateRandomHand, compareHand };