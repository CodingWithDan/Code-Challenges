//====================================================================================================================
//Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
//====================================================================================================================

//P: You will be given an array of objectsrepresenting data about developers who have signed up to attend the coding meetup that you are organising for the first time.
//P: If, there are no JavaScript developers from Europe then your function should return 0.
//P: The format of the strings will always be Europe and JavaScript.
//P: All data will always be valid and uniform as in the example above.
//R: Return the number of developers whose language is JavaScript AND coming from Europe.
//E:
// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];

// your function should return number 1.
//P: Iterate through the array of objects. If there's a match of both JavaScript and Europe, increase a counter by 1. Else, not.

function countDevelopers(list) {
    let count = 0
    list.forEach(x => x.continent === 'Europe' && x.language === 'JavaScript' ? count++ : x)
    return count
  }
  
  //OR
  
  function countDevelopers(list) {
  
   return list.reduce((count, curr) => (curr.continent === 'Europe' && curr.language === 'JavaScript') ? count + 1 : count, 0)
   
  }