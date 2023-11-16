//=======================
//CW: Polish alphabet
//=======================

// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z

// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

function correctPolishLetters (string) {
    let str = ''
    for (let i = 0; i < string.length; i++){
      if(string[i] == 'ą'){
         str += 'a'
         }
      else if(string[i] == 'ć'){
         str += 'c'
      }
      else if(string[i] == 'ę'){
         str += 'e'
      }
      else if(string[i] == 'ł'){
         str += 'l'
      }
      else if(string[i] == 'ń'){
         str += 'n'
      }
      else if(string[i] == 'ó'){
         str += 'o'
      }
      else if(string[i] == 'ś'){
         str += 's'
      }
      else if(string[i] == 'ź'){
         str += 'z'
      }
      else if(string[i] == 'ż'){
         str += 'z'
      }
      else{
        str += string[i]
      }
    }
    return str
  }

  //alt

  function correctPolishLetters (str) {
    const vocabulary = {
     'ą' : 'a',
     'ć' : 'c',
     'ę' : 'e',
     'ł' : 'l',
     'ń' : 'n',
     'ó' : 'o',
     'ś' : 's',
     'ź' : 'z',
     'ż' : 'z'
     };
     
     return [...str].map(letter => vocabulary[letter] || letter).join('');
   }