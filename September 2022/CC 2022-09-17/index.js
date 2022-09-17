//==================================================================
//JavaScript.info - Translate border-left-width to borderLeftWidth
//==================================================================
// importance: 5

// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

//P:Receive a string with hyphens. 
//R: Return the string with hyphens removed and capitalize the words after the first one (camel case)
//E: camelize("background-color") == 'backgroundColor';
//E: camelize("list-style-image") == 'listStyleImage';
//E: camelize("-webkit-transition") == 'WebkitTransition';
//P: split the string at the hyphen and transform it into an array
//P: map out the array and apply a ternerary statement: if the index is 0, return the word. If not--
//P: uppercase the first letter and concatenate the rest of the letters
//P: Join!

function camelize(str){
    return str.split('-').map((x, index) => index === 0 ? x : x[0].toUpperCase() + x.slice(1)).join('')
}


camelize("background-color")