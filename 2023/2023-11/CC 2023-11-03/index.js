
//==================
//CW: Insert dashes
//==================

// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3.

// Note that the number will always be non-negative (>= 0).


function insertDash(num) {
    let str = String(num)
    let win = ''
    
    for (let i = 0; i < str.length; i++){
      if(str[i] % 2 !== 0 && str[i + 1] % 2 !== 0 ){
     win += str[i]       
     win += '-'
      }
      else{
        win += str[i]
      }
    }
   let len = win.length
   return win[len - 1] === '-' ? win.slice(0, -1) : win
 }
 
 
 //ALT
 
 function insertDash(num) {
 
  num = num.toString().split('')
   
   for(let i = 0; i < num.length; i++){
     if (num[i]%2 > 0 && num[i +1]%2 > 0){
       num[i] = num[i] + '-'
     }
   }
  
   return num.join('')
   
 }