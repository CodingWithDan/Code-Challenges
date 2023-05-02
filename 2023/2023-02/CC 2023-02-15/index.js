
  //=========================
  //Multiple of index
  //=========================
  //Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
  
  function multipleOfIndex(array) {
    let newArr = [];
    
    for (let i = 0; i <= array.length; i++){
      if (array[i] % i === 0){
        newArr.push(array[i])
      }
       
    }
    return newArr
   
  }
  
  
  OR
  
  function multipleOfIndex(array) {
    return array.filter((num, i) => num % i === 0);
  }
  
