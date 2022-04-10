//String Cleaning
//Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

// //'! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'

//Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.


function stringClean(s){
   let newStr = ''
  
for (let i = 0; i < s.length; i++){ //iterate through the string
  let x = s.charAt(i)  //returns the character at the specified index within s
  if (x >= '0' && x <= '9'){ //if a number, remove it
    s.slice(i)
  }
  else {
    newStr += x;
}
 } 

return newStr

 
}

stringClean('This looks5 grea8t!')