//========================
//CW: Vowel Count
//========================

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

export class Kata {
    static getCount(str: string): number {
      let vowels = 0
      let arr = str.split('')
      
      for (let i = 0; i < str.length; i++){
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
          vowels++
        }   
      }
      return vowels
    }
  }

  //ALT

//   export class Kata {
//     static getCount(str: string) {
//       return [...str].filter(char => 'aeiou'.includes(char)).length;
//     }
//   }