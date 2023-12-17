
//========================================================
//CW: Training JS #11: loop statement --break,continue
//========================================================

// In this example, console.log(arr[i]) is never executed for negative element. thanks to continue.

// Through the use of break and continue, you can make the loop statement more flexible and convenient.

// Ok, lesson is over. let's us do some task with break and continue.
// Task

// Coding in function grabDoll. function accept 1 parameter:dolls. it's a string array, a list of some dolls.

// You need traverse dolls by using for loop. If element is "Hello Kitty" or "Barbie doll", you should push it to a bag(bag is an array, I've defined in the function); if it's other strings, we should use continue skip it.

// When the bag has three element, bag is full. You should use break jump out the loop; If bag is not full, you should traverse dolls until the last element.

// Return the bag after for loop finished.

// You should use for, break and continue in your code. otherwise, your solution may not pass this kata.

function grabDoll(dolls){
    var bag=[];
    let num = 0
    
    for (let i = 0; i < dolls.length; i++){
      if(dolls[i] ==  "Hello Kitty" || dolls[i] ==  "Barbie doll"){
        bag.push(dolls[i])
        num++
      }
      if(num == 3){
        return bag
      }
    }
    
    return bag;
  }
  
  //ALT
  
  function grabDoll(dolls){
    var bag=[];
    
    for(var i = 0; i < dolls.length; i++) {
    
      if(dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll")
        bag.push(dolls[i]);
      else
        continue;
        
      if(bag.length === 3) break;
    }
    
    return bag;
  }
  
  