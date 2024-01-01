//================================================
//CW: Gryffindor vs Slytherin Quidditch Game
//================================================

// It's the most hotly anticipated game of the school year - Gryffindor vs Slytherin! Write a function which returns the winning team.

// You will be given two arrays with two values.

// The first given value is the number of points scored by the team's Chasers and the second a string with a 'yes' or 'no' value if the team caught the golden snitch!

// The team who catches the snitch wins their team an extra 150 points - but doesn't always win them the game.

// gameWinners([150, 'yes'],[200, 'no']) //'Gryffindor wins!'
// gameWinners([400, 'no'],[350, 'yes']) //'Slytherin wins!'

// If the score is a tie return "It's a draw!""

// ** The game only ends when someone catches the golden snitch, so one array will always include 'yes' or 'no.' Points scored by Chasers can be any positive integer.

function gameWinners(gryffindor, slytherin) {
    let score1 = gryffindor[1] == 'yes' ? gryffindor[0] + 150 : gryffindor[0]
    let score2 = slytherin[1] == 'yes' ? slytherin[0] + 150 : slytherin[0]
    
    if(score1 == score2){
      return "It's a draw!"
    }
    return score1 > score2 ? 'Gryffindor wins!' : 'Slytherin wins!'
  };

  //ALT 

  const gameWinners = (gryffindor, slytherin) => {
    const g = gryffindor[0] + (gryffindor[1] === 'yes' ? 150 : 0);
    const s = slytherin[0] + (slytherin[1] === 'yes' ? 150 : 0);
    return g === s ? 'It\'s a draw!' : `${g > s ? 'Gryffindor' : 'Slytherin'} wins!`
  }