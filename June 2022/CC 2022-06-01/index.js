//============================
//Categorize New Member
//===========================
//The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
// Input

// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
// Output

// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
// Example

// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]


//P: 
//--data return a string value
//--will not return a boolean.
//seniors will have an age of at least 55 && a handicap greater than 7
//else return open

//R: 
//E:
//--if i get a pair of 18 and 20, they will be under 55, therefore return 'open'
//P:

function openOrSenior(data){
    let arr = []
    
    for (let i = 0; i < data.length; i++){
      
        if (data[i][0] >= 55 && data[i][1] > 7){
          arr.push('Senior')       
        }
        else {
          arr.push('Open')
        }
    }
    return arr;
  }

  //OR

  function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
  }
  

//================================================
//101 Dalmatians - squash the bugs, not the dogs!
//================================================
// Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

// By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

// The number of dogs will always be a number and there will always be at least 1 dog.

// function howManyDalmations(numer :
  
//     var dogs  ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"];
    
//     var respond = number <= 10 ? dogs[0] (number <= 50 ? dogs[1] : (number = 101  dogs[3] : dogs[2]
    
//   return respond

function howManyDalmatians(number){
    var dogs = ["Hardly any", "More than a handful!", `Woah that's a lot of dogs!`, "101 DALMATIANS!!!"];
  
   if (number <= 10){
      return dogs[0]
    }
    else if (number <= 50){
      return dogs[1]
    }
    else if (number === 101){
      return dogs[3]
    }
    else{
      return dogs[2]
    }
    
    }

    //OR

    function howManyDalmatians(number){
        var dogs = ["Hardly any", "More than a handful!", `Woah that's a lot of dogs!`, "101 DALMATIANS!!!"];
      
        return number <= 10 ?  dogs[0]
        : number <= 50 ? dogs[1]
        : number === 101 ? dogs[3]
        : dogs[2]
        }