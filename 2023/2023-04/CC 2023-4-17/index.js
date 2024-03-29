//================
//Fuel Calculator 
//=================
// In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

// Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

// Good Luck!

function fuelPrice(litres, pricePerLitre) {
  
    if (litres >= 10){
    return +((litres * pricePerLitre) - (litres * .25)).toFixed(2)
  }
  
     if (litres >= 8){
    return +((litres * pricePerLitre) - (litres * .20)).toFixed(2)
  }
  
     if (litres >= 6){
    return +((litres * pricePerLitre) - (litres * .15)).toFixed(2)
  }
  
    if (litres >= 4){
    return +((litres * pricePerLitre) - (litres * .10)).toFixed(2)
  }
  
    if (litres >= 2){
   return +((litres * pricePerLitre) - (litres * .05)).toFixed(2)
 }
  
 if (litres < 2){
   return (litres * pricePerLitre)
 }
}