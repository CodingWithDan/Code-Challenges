
// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0
 

// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.
  
 //MINE
  
 function numJewelsInStones (jewels, stones) {
    let count = 0
    let stonez = stones.split('')
    let jewelz = jewels.split('')
    for(let i = 0; i < stonez.length; i++){
        for(let j = 0; j < jewelz.length; j++){
            if(stonez[i] === jewelz[j]){
                count++
            }
        }
    }
    return count
    }

numJewelsInStones("aA", "aAAbbbb")
  
  //ALT
//In the past we might've used a filter, set, has, indexOf/lastIndexOf, but now we are going to use a hashmap pattern!

//First we're going to create an object for all of the jewels, and if the stones exist in this object, update a count by 1

//create empty map object --> create a for/of loop, it graps the lower case a and uppercase A, it returns true for both.
//now do the same for stones. if the map object has an a or A property, it will increase the count by 1

function findJewels(jewels, stones){
  const mapObj = {}
  let count = 0
  
  for (const jewel of jewels){
    mapObj[jewel] = true
  }
  
  for (const stone of stones){
    if(map[stone]){
      count++
    }
  }
  return count
}

console.log(findJewels("aA", "aAbbbb"), 3)