
//==================================
//Count characters in your string.
//==================================
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


function count (string) {  
    let count = {};
    string.split('').forEach(s => {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  
  }
  
  //ALT
  
  function count (string) {  
    //create obj
    let countObj = {}
    //loop --> check val exists ? val++ : val - 1
    for (const c of string){
      if (countObj[c]){
        countObj[c]++
      }
      else{
        countObj[c] = 1
      }
    }
    return countObj
  }
  
  console.log(count("aba"), { a: 2, b: 1 })
  console.log(count("dog"), { d: 1, o: 1, g: 1 })
  console.log(count("abba"), { a: 2, b: 2 })
  