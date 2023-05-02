//===========================================
//How many consecutive numbers are needed?
//===========================================

// Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

// For example:
// If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.

function consecutive(arr) {
    if(arr.length < 2) return 0
      
    let count = 0
    let arrr = arr.sort((a, b) => a - b)
    
    for (let i = arrr[0]; i < arrr[arrr.length - 1]; i++){
        count++
      }
    
      return count - arr.length + 1
    }
    
    consecutive([4,8,6])

    //ALT

    function consecutive(arr){
        let l = arr.length;
        return l ? Math.max(...arr) - Math.min(...arr) - l + 1 : 0;
      }