//Huntober #2
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet




function domainName(website){
  
}

domainName("http://github.com/carbonfive/raygun") //"github" 
domainName("http://www.zombie-bites.com") //"zombie-bites"
domainName("https://www.cnet.com") //"cnet"


function domainName(url){
    url = url.replace('http://', '')
    url = url.replace('https://', '')
    url = url.replace('www.', '')
     
     return url.split('.')[0]
     }

   //basically, we can split the .com or .org or whatever at the very end with a split method at the '.', and then just return the domain name before that. But that still leaves us with http or https or www.
   //we have to remove that with replace, which we can replace in the string with nothing.