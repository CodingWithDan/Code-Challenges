//========================================
//JavaScript.info -- Copy and sort array
//========================================
//P: We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
//R: Create a function copySorted(arr) that returns such a copy.
//E: sorted --> CSS, HTML, JavaScript
//E: unsorted/original --> HTML, JavaScript, CSS
//P: We basically just have to sort the array like we would normally. BUT! Because sorting alters the original array, we have to first slap a slice method on it, which automatically creates a copy and doesn't touch the original array


let carr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(carr)

function copySorted(carr){
    return carr.slice().sort()
}

console.log( sorted ); // CSS, HTML, JavaScript
console.log( carr ); //HTML, JavaScript, CSS