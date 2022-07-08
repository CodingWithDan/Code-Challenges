//================================
//Counting Duplicates
//================================
//Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

//P: Given a string
//P: Contains uppercase and lowercase alphabet characters, and positive whole digits

//R: Return the number of characters and number that occur more than once
//E:
//P: 
  //new Set() is a constructor that takes an iterable and counts all of the unique characters 
  //in a string, array, etc.
  function duplicateCount(text){

    let texts = text.toLowerCase().split('').sort()
    let arr = []
    for (let i = 0; i < texts.length; i++){
      if (texts[i] === texts[i + 1]){
        arr.push(texts[i])
      }
    }
     return new Set(arr).size
    
      }
      duplicateCount("ababcde")