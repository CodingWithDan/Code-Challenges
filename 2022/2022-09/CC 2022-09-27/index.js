//============================================
//JavaScript.info: Filter unique array members
//============================================
//P: Receive an array
//R: create a function that returns an array with unique items (arr)
//E:
// function unique(arr) {
//     /* your code */
//   }
  
//   let strings = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];
  
//   alert( unique(strings) ); // Hare, Krishna, :-O
//P: 


  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  function unique(arr) {
    return new Set([...arr])
  }

  unique(strings)  // Hare, Krishna, :-O