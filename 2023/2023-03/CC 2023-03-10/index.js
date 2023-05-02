//===================
//Pete, the baker
//===================

//Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?
// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

//We are given a list of what ingredients + amounts needed to make a cake recipe
//We are given a list of AVAILABLE ingredients + amounts that we have. The available ingredients may or may not overlap with the recipe
//We want to have returned how many cakes we can make for the recipe from the available ingredients
//Ex:
// must return 2
//cakes({flour: 500, sugar: 200, eggs: 1}, available {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
//cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, availablesugar: 500, flour: 2000, milk: 2000});
//Check to see what if all the keys in our available match the keys in recipe
//divide the two. and if the result is a decimal, round it down.

function cakes(recipe, available) {
    const rKeys = Object.keys(recipe)
    const aKeys = Object.keys(available)
    let answer = Infinity
    
    if (!rKeys.every(e => aKeys.includes(e))){
      return 0
    } 
    
    rKeys.forEach(key => {
      if (available[key] / recipe[key] <= answer) {
        answer = available[key] / recipe[key]
      }
    })
    return Math.floor(answer)
  
  }