//=========================
//Remove anchor from URL
//=========================
  
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
// Examples

// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

//P:Receive a URL in the form of a string. It may contain '#' or it may not
//P: The '#' will always occur after '.com', and you'll just have to return everything preceding it
//R: Return the string in its entirety if it doesn't contain '#'. If it does, return the string without it
//E: "www.codewars.com#about" --> "www.codewars.com"
//E: "www.codewars.com?page=1" -->"www.codewars.com?page=1"
//P: Create an empty array and iterate through url after splitting it. If it equals '#', return everything pushed into the new array.
//P: If there's no '#' return entire string


function removeUrlAnchor(url){
    let arr = []
    for (let i = 0; i < url.split('').length; i++){
      if(url[i] !== '#'){
        arr.push(url[i])
      }
      else{
        return arr.join('')
      }
    }
    
    return arr.join('')
  }