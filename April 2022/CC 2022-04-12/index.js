//================================
//Area or Perimeter
//================================
//You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
//If it is a square, return its area. If it is a rectangle, return its perimeter.
//Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

const areaOrPerimeter = function(l , w) {
    // Return your answer
    let perea = 0;
    if (l === w){
      perea = l * w
      return perea
    }
    
    else{
      perea = (l * 2) + (w * 2)
      return perea
    }
  };

  //===============================================
  //Find Maximum and Minimum Values of a List
  //==============================================
  //Your task is to make two functions (max and min, or maximum and minimum, etc., 
  //depending on the language) that receive a list of integers as input and return, 
  //respectively, the largest and lowest number in that list.
  //You may consider that there will not be any empty arrays/vectors.

  

function min(list){
    let lowestNum = list.sort((a, b) => a-b)
    return lowestNum[0]
    
    }
  
  function max(list){
    let lowestNum = list.sort((a, b)=>b-a)
    return lowestNum[0]
    }

    //==============================================
    //Removing Elements
    //==============================================
    //Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

    // Example:

    // ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

    // None of the arrays will be empty, so you don't have to worry about that!

    function removeEveryOther(arr){
        
        for (var i = 1; i < arr.length;i++){
            arr.splice(i,1);
        }
        return arr;
      }

      //More efficient code

      function removeEveryOther(arr){
        return arr.filter(function(elem, index) {
          return index % 2 === 0;
        });
      }