
  //========================
  //Calculate average 
  //========================
  //Write a function which calculates the average of the numbers in a given list.
  //Note: Empty arrays should return 0.
  
  function find_average(array) {
    if (array == ""){
      return 0;
    }
     else{
    return (array.reduce((agg, c) => agg + c))/array.length
    }
   }
   
   find_average([1, 2, 3])
   
   