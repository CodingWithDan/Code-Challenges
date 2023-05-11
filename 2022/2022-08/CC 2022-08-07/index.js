//==========================
//Take a Ten Minutes Walk
//==========================
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

//     Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

//P: Receive an array of 1 letter characters, with them either being 'n', 's', 'e', or 'w'. 
//P: If there are exactly 10 characters and you end up back in the same spot, the result is true. Else, return false
//R: Return a boolean value of true or false
//E: Test.expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
//E: Test.expect(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
//E: Test.expect(!isValidWalk(['w']), 'should return false');
//E: Test.expect(!isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');
//P: Create 2 checkers, vertical and horizantal. If there's a N for every S, and E for every W, then it will return true. 
//P: Iterate through the array. If n, increase vert by 1, if s, decrease by 1. If E, increaese by 1, If W, decrease by 1. 
//P: Check at the end if they're both 0 and if the array length is 10

function isValidWalk(walk) {
    let vert = 0
    let horz = 0
    
    for (let i = 0; i < walk.length; i++){
      
      if (walk[i] === 'n'){
        vert++
      }
      if (walk[i] === 's'){
        vert--
      }
      if (walk[i] === 'e'){
        horz++
      }
      if (walk[i] === 'w'){
        horz--
      }
    }
   return walk.length === 10 && vert === 0 && horz === 0
    }