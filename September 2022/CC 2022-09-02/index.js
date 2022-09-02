//====================
//Define a card suit
//====================
// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

//P: Get any card that has a length of 2 (2-10, J, K, Q, A + ♣, ♦, ♥, ♠ ).
//R: Return the string of suit of the card in lowercase
//E: ('Q♣') -> return 'clubs'
//E: ('10♦') -> return 'diamonds'
//E: ('2♥') -> return 'hearts'
//E: ('A♠') -> return 'spades'
//P: run 4 statements, checking in each if card.includes('SUIT'). If so, return the name of it.

function defineSuit(card) {
    if(card.includes('♣')){
        return 'clubs';
      }
    if(card.includes('♥')){
        return 'hearts';
      }
    if(card.includes('♦')){
        return 'diamonds';
      }
    if(card.includes('♠')){
        return 'spades';
      }
  }