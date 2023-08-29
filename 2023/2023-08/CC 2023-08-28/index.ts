//==================
//CW: Dropcaps
//==================

// DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

// But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

// *should work also on Leading and Trailing Spaces and caps.

// "apple"            => "Apple"
// "apple of banana"  => "Apple of Banana"
// "one   space"      => "One   Space"
// "   space WALK   " => "   Space Walk   " 

// Note: you will be provided atleast one word and should take string as input and return string as output.



    export function dropCap(s: string): string {
      return s.split(' ').map((i) => i.length > 2 ? i.charAt(0).toUpperCase() + i.slice(1).toLowerCase() : i).join(' ')
    
    
    }
    
       //ALT
// export function dropCap(s: string): string {
//     let arr = s.split(' ')
//     let ans = []
//     for (let i = 0; i < arr.length; i++){
//       if(arr[i].length > 2){
//         ans.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase())
//       }
//       else{
//         ans.push(arr[i])
//       }
//     }
//       return ans.join(' ')
//     }
    
//     dropCap("apple of banana")
    
 
    
