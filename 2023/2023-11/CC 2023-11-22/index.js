//=======================
//CW: Averages of numbers
//=======================

function averages(numbers) {
    return  numbers
        ? numbers
            .map((number, index, array) => (number + array[index + 1]) / 2)
            .slice(0, -1)
        : []
    }
    
    //ALT
    
    function averages(numbers) {
      var final = [];
      if (numbers) {
        for (var i=0; i<numbers.length-1; i++) {
          final.push((numbers[i] + numbers[i+1]) / 2);
        }
      }
      return final;
    }