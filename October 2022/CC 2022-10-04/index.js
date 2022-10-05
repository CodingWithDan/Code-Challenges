//====================================================================
//Coding Meetup #2 - Higher-Order Functions Series - Greet developers
//====================================================================
  
//P: Given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
//R: Return an array where each object will have a new property 'greeting' with the following string value:
    //Hi < firstName here >, what do you like the most about < language here >?
//E: { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby', greeting: 'Hi Madison, what do you like the most about Ruby?'}
//P: Iterate through the array of objects with forEach (map would return a whole new array, but we want to mutate this).
  
function greetDevelopers(list) {
    list.forEach((x) => {
       x.greeting = `Hi ${x.firstName}, what do you like the most about ${x.language}?`
     })
     return list
   }