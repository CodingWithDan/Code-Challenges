//RECURSSION

// Make a recursive version of the code below
// function mygcd(x, y){
//     for(let i = Math.min(x,y); i > 0; i--){
//         if (x % i === 0 && y % i === 0)
//         return i
//     }
// }

function mygcd(a, b){
    if (b === 0){
        return a
    }
    return mygcd(b, a% b)
}
