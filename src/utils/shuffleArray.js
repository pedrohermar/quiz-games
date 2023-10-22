export function shuffleArray(array) {
  function compareRandom() {
    return Math.random() - 0.5;
  }

  return array.sort(compareRandom);
}
