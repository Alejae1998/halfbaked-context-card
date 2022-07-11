export function findCardIndex(value, suit, cards) {
  return cards.findCardIndex(card => card.value === value && card.suit === suit);
}