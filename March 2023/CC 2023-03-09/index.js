//======================
//CamelCase Method
//======================

// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

function camelCase(y){
    return y.split(' ').map((x) => x[0].toUpperCase() + x.slice(1)).join('')
  }
  
  camelCase("camel Case method")
  
  //OR
  
  String.prototype.camelCase = function(){  
    return this.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('');
  }; 