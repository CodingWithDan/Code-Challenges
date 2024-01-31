//
//CW: Write Number in Expanded Form


// Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

// NOTE: All numbers will be whole numbers greater than 0.


function expandedForm(num) {
    let resultArr = [];

    let nummy = String(num).split('').reverse().join('');
    for(let i=0; i < nummy.length; i++){
      let digitMultiplier = 10**i;
           
        if(nummy[i] != 0 )resultArr.push(nummy[i] * digitMultiplier);              
    }
    return resultArr.reverse().join(" + ");
  }
