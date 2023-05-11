

//================================================
//Enumerable Magic #3 - Does My List Include This?
//================================================
//Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

function include(arr, item){
    if(arr.includes(item)){
      return true
    }
    else{
    return false}
  }
  
  //OR
  
  function include(arr, item){
    return arr.includes(item)
  
  }  