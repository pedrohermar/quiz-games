export function checkSlotStatus(slot, index, turn) {
  if (turn === index + 1) return "current";

  if (slot === null) return;

  if (slot) return "correct";
  else return "incorrect";
}
