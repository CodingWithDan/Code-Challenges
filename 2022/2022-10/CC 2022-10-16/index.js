//==========================================
//Huntober: Array Week Challenge - Day 3
//==========================================

// Today's challenge is a bit of a tangent, but I think it's pretty powerful. It's inspired by my favorite Codewars kata ever, Moving Zeros To The End. This is my favorite kata because the first time I did it, my approach was so convoluted compared to the top-voted solution, which was a thing of beautiful simplicity. I think the moment I saw that solution something clicked for me and I realized the power of the built-in Javascript methods.

// Today I'd like you to write a function that:

//     takes in a given array of strings and move any entries containing the letter 'a' to the front
//     then move any remaining entries that have over 3 characters to the back
//     please preserve the relative order of entries within their given category

// Example:

// myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']
// // move things around
// => ['hola', 'hallo', 'hi', 'hej', 'hello', 'howdy', 'heyyy']

function reorder (arr){
    let newOrder = []
    let middle = []
    arr.forEach(x => {
        if(x.includes('a')){
            newOrder.push(x)
        }
        else{
            middle.push(x)
        }
    })
    middle = middle.sort((a,b) => a.length - b.length)
    let combined = newOrder.concat(middle)

    console.log(newOrder)
    console.log(middle)
    console.log(combined)
    
}


myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']
reorder(myArr)