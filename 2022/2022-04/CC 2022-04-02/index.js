//Sum the Strings

// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"

// Notes:

//     If either input is an empty string, consider it as zero.

//     Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

function sumStr(a,b) {
  
    if (a === ""){
      c === 0
    }
    if (b === ""){
      d === 0
    }
      let c = parseInt(a) 
      let d = parseInt(b) 
      let sum = c + d
      return sum.toString();
    }
    
    console.log(sumStr("1", "2"))
    
    // ..^^ my first attempt
    
    
    function sumStr(a,b) {
     
      const num1 = Number(a);
      const num2 = Number(b);
      let zebra = num1 + num2;
      return String(zebra)
    }
    
    
    
    // Simpler Answer ^^
    
    function sumStr(a,b) {
      let c = Number(a) 
      let d = Number(b) 
      
      let sum = c + d
      return '' + sum  
    }
    
    console.log(sumStr("1", "2"))
    
    