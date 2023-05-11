//==================================
//Multiplication table for number
//==================================

// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50

// P. S. You can use \n in string to jump to the next line.

// Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

//P: An integer limited to the number between 1 and 10.
//R: return a string with a multiplication table with the values 1 to 10 times the input value, with each string separated by line breaks
//E: '1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50')
//P: Create an empty array and then create a  loop that counts from 1 to 10. Multiple each iteration with the input value and place it in a template literal. Push these into an array, and return the array, while joining each item in the array with '\n'

function multiTable(number) {
    let arr = []
    for (let i = 1; i <= 10; i++){
      arr.push(`${i} * ${number} = ${i * number}`)
    }
    return arr.join('\n')
  }
