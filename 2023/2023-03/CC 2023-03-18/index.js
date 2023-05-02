//======================
//Alphabet war
//======================

// Introduction

// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.
// Task

// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1

// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1

// The other letters don't have power and are only victims.
// Example

// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!

function alphabetWar(fight)
{
  let rs = 0
  let ls = 0
  let neu = 0
  
  for (let i = 0; i < fight.length; i++){
    if(fight[i] == 'w'){
      ls += 4
    }
    if(fight[i] == 'p'){
      ls += 3
    }
    if(fight[i] == 'b'){
      ls += 2
    }
    if(fight[i] == 's'){
      ls += 1
    }
    if(fight[i] == 'm'){
      rs += 4
    }
      if(fight[i] == 'q'){
      rs += 3
    }
    if(fight[i] == 'd'){
      rs += 2
    }
    if(fight[i] == 'z'){
      rs += 1
    }
  }
  
  if (rs > ls){
    return "Right side wins!";
  }
  else if (rs < ls){
    return "Left side wins!";
  }
  else{
    return "Let's fight again!";
  }
  
   
}

//ALT

function alphabetWar(fight) {
    let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
    let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
    return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";
}