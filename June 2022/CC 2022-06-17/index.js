

//=============================
//Convert string to camel case
//=============================
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples

// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"


function toCamelCase(str){
    str = str.split('');
    return str.map((x, i) => {
      if(x == '-' || x == '_'){
        x = str[i+1].toUpperCase(); //replace any hyphen with a capitalized letter
        str.splice(i+1, 1); //remove any letter after the hypen
        return x
       }
      else{
        return x;   //otherwise return the letter
        }    
    }).join('');
  }
  
  toCamelCase("The-Stealth-Warrior")