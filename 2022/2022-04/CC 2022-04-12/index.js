
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

