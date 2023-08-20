//=============================
//CW: The old switcheroo
//=============================

// Write a function

// vowel2index(str)

// that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
// E.g:

// vowel2index('this is my string') == 'th3s 6s my str15ng'
// vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
// vowel2index('') == ''

function vowel2index(str) {
    let split = str.split('')
    let newStr = ''
    
    for (let i = 0; i < split.length; i++){
      if(split[i] == 'a' || split[i] == 'A' ||
        split[i] == 'e' || split[i] == 'E' || 
        split[i] == 'i' || split[i] == 'I' || 
        split[i] == 'o' || split[i] == 'O' || 
        split[i] == 'u' || split[i] == 'U'){
        
        newStr += i + 1
      }
      else{
        newStr += split[i]
      }
    }
   return newStr
 }
 
 console.log(vowel2index('this is my string'), 'th3s 6s my str15ng')
 
 //alt
 
 function vowel2index(str) {
    var arr = str.split(''),
        i = 0,
        len = arr.length,
        vowels = ['a','e','i','o','u'];
    
    for (i=0; i<len; i++) {
      if ( vowels.indexOf(arr[i].toLowerCase()) > -1 ) arr[i] = i+1;
    }
    
    return arr.join('');
 }
 