//========================
//Freudian translator
//========================

// You probably know the 42 number as "The answer to life, the universe and everything" according to Douglas Adams' "The Hitchhiker's Guide to the Galaxy". For Freud, the answer was quite different.

// In the society he lived in, people-women in particular- had to repress their sexual needs and desires. This was simply how the society was at the time. Freud then wanted to study the illnesses created by this, and so he digged to the root of their desires. This led to some of the most important psychoanalytic theories to this day, Freud being the father of psychoanalysis.

// Now, basically, when a person hears about Freud, s/he hears "sex" because for Freud, everything was basically related to, and explained by sex.

// In this kata, the toFreud() function will take a string as its argument, and return a string with every word replaced by the explanation to everything, according to Freud. Note that an empty string, or no arguments, should result in the ouput being ""(empty string).



function toFreud(string) {
    if (string === "") {
        return ""
    }
    else {
        let result = string.split(' ').map(sex => "sex").join(' ')
        return result;
    }
}

//====================================
//Multiples of a Number
//====================================
// //In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// If you can, try writing it in only one line of code.


function findMultiples(integer, limit) {
    let list = [integer]
    for (let i = integer; i <= limit; i+= integer){
      if (i <= limit){
        list.push(i + integer)   
      }
     
      }
        list.pop()
       return list;
  }
  

  //Simpler answer

  function findMultiples(int,limit){
    let result = []
    
    for (let i = int; i<=limit ; i+=int)
      result.push(i)
      
    return result
  }




