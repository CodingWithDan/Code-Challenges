//==================================
//Replace With Alphabet Position
//==================================
// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.
// Example

// alphabetPosition("The sunset sets at twelve o' clock.")

// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )



function alphabetPosition(texts) {
    let text = texts.split('')
    console.log(text)
    let arr = []
    let rawr = []
    
    for (let i = 0; i < text.length; i++){
      
      if (text[i] == 'A' || text[i] == 'a'){
         arr.push('1');
        }
      else if( text[i] == 'B' || text[i] == 'b'){
         arr.push('2');
      }
    
      else if(text[i] == 'C' || text[i] == 'c'){
        arr.push('3');
       }
           
      else if( text[i] == 'D' || text[i] == 'd'){
        arr.push('4');
        }
           
        else if( text[i] == 'e' || text[i] == 'E'){
         arr.push('5');
        }
       else if( text[i] == 'f' || text[i] == 'F'){
         arr.push('6');
        }
      
       else if( text[i] == 'G' || text[i] == 'g'){
         arr.push('7');
        }
      
       else if( text[i] == 'H' || text[i] == 'h'){
         arr.push('8');
        }
      
       else if( text[i] == 'I' || text[i] == 'i'){
         arr.push('9');
        }
      
       else if( text[i] == 'j' || text[i] == 'J'){
         arr.push('10');
        }
       else if( text[i] == 'k' || text[i] == 'K'){
         arr.push('11');
        }
      
       else if( text[i] == 'L' || text[i] == 'l'){
         arr.push('12');
        }
      
       else if( text[i] == 'M' || text[i] == 'm'){
         arr.push('13');
        }
      
       else if( text[i] == 'n' || text[i] == 'N'){
         arr.push('14');
        }
      
       else if( text[i] == 'O' || text[i] == 'o'){
         arr.push('15');
        }
      
       else if( text[i] == 'P' || text[i] == 'p'){
         arr.push('16');
        }
      
       else if( text[i] == 'Q' || text[i] == 'q'){
         arr.push('17');
        }
      
       else if( text[i] == 'r' || text[i] == 'R'){
         arr.push('18');
        }
      
       else if( text[i] == 'S' || text[i] == 's'){
         arr.push('19');
        }
      
       else if( text[i] == 't' || text[i] == 'T'){
         arr.push('20');
        }
      
       else if( text[i] == 'u' || text[i] == 'U'){
         arr.push('21');
        }
       else if( text[i] == 'V' || text[i] == 'v'){
         arr.push('22');
        }
       else if( text[i] == 'W' || text[i] == 'w'){
         arr.push('23');
        }
       else if( text[i] == 'X' || text[i] == 'x'){
         arr.push('24');
        }
       else if( text[i] == 'Y' || text[i] == 'y'){
         arr.push('25');
        }
       else if( text[i] == 'z' || text[i] == 'Z'){
         arr.push('26');
        }
       else if( text[i] == 'e' || text[i] == 'E'){
         arr.push('5');
        }
           
       else{
        ;
      }  
    }
     return arr.join(' ')
  }