export const getRandomQuiz = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length) ?? 0;
  return array[randomIndex];
};
