// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
// assert.strictEqual(sumMix([9, 3, '7', '3']), 22); 
// assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 

//Cool! So I receivge an array of integers. Are all of these integers whole numbers? --> yes
//Great. Are they ever negative? --> no
//And just to reiterate, I'll only recveive numbers. Letters are out, but I won't receive blank inputs or anything of that matter.
//Cool. So just to reiterate before I dive into this, I'm gonna make an example.
//If I were to be given an array of [9, 3, '7', '3']), it would return 22 --> yes
//And if I were given an array of ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'] it would return 41, is that correct? --> yes

function sumMix(arr){
  let newArr = arr.map(x => Number(x))
  console.log(newArr)
  //cool, that changes them all to numbers. And now that we've done that, we can simply add them all up using a reduce method.
  return newArr.map(x => Number(x)).reduce((sum, curr) => sum + curr, 0)
}

sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])