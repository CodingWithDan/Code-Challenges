//Figure out if the missing letters are either a, e, i, o, or u
//Every sentence will contain all the vowels but one -- no need to worry about cpapitals

//Every letter is associated with an index number -- return that number if it's the missing letter
//so we want to be able to iterate over the sentence or loop over it, so first we need to split it to turn it into an array
//And also to lowercase it since we don't want it to be case sensitive
//after that, we'll search for the indexOf the letters, and if it's missing it'll return -1.
//Then from there, we can return that index!

function absentVowel(x){
    let arr = x.toLowerCase().split('')
    
    if(arr.indexOf('a') === -1){
      return 0
    }
    else if (arr.indexOf('e') === -1){
      return 1
    }
    else if (arr.indexOf('i') === -1){
      return 2
    }
    else if (arr.indexOf('o') === -1){
      return 3
    }
    else{
      return 4
    }
    
  }
  
  console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"), 3)
  console.log(absentVowel("John Doe hs seven red pples under his bsket"), 0)


  //alt

  function absentVowel(str){
    //list all vowels --> loop each vowel and see if str
    let vowels = 'aeiou'
    
    for (let i = 0; i < vowels.length; i++){
      if(str.indexOf(vowels[i]) === -1){
        return i
      }
    }
  }