//===========================
//String array duplicates
//===========================

// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

//     dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

//     dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

// Good luck!

function dup(s) {
    let newArr = s.join(' ').split('')
    let ans = []
  for (let i = 0; i < newArr.length; i++){
    if(newArr[i] !== newArr[i + 1]){
      ans.push(newArr[i])
    }
  }
    return ans.join('').split(' ')
    
  };
  
  dup(["abracadabra","allottee","assessee"])
  
  //ALT
  
  function dup(s) {
      return s.map(w => {
      return w.split('').filter((e, i, a) => {
              return e !== a[i - 1];
          }).join('');
      });
  };