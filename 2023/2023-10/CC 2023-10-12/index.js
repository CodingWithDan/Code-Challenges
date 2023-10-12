
//=============================
//CW: Count strings in objects
//=============================

// Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

// strCount({
//   first: "1",
//   second: "2",
//   third: false,
//   fourth: ["anytime",2,3,4],
//   fifth:  null
//   })
//   //returns 3


function strCount(obj){
    let count = 0;
    for (key in obj) {
      if (typeof obj[key] == 'string') count++;
      if (typeof obj[key] == 'object') count += strCount(obj[key]);
    }
    return count;
  }
  
  //ALT
  
  function strCount(obj) {
    let count = 0;
  
    function countStrings(obj) {
      for (const key in obj) {
        if (typeof obj[key] === 'string') {
          count++;
        } else if (typeof obj[key] === 'object') {
          countStrings(obj[key]); // Recursive call for nested objects or arrays
        }
      }
    }
  
    countStrings(obj);
    return count;
  }
  
  const result = strCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime", 2, 3, "4"],
    fifth: { sixth: "five", seventh: ["six", 7] },
  });
  
  console.log(result); // Output: 4
  
  