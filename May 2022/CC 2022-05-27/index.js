//===========================
//DNA to RNA Conversion
//===========================
// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"

// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

function DNAtoRNA(dna) {
    let x = dna.split('')
    let y =[]
    for (let i = 0; i < x.length; i++){
      if (x[i] === 'T'){
        y.push("U")
      }
      else {
        y.push(x[i])
      }
    }
    return y.join('')
  }

  //OR

  function DNAtoRNA(dna) {
    return dna.split('T').join("U")
  }

  //============================
  //Abbreviate a Two Word Name
  //============================
//   Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    let x = name.split(' ')
    return `${x[0][0].toUpperCase()}.${x[1][0].toUpperCase()}`
  
  }


  //========================
  //L1: Set Alarm
  //=========================
  //Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

function setAlarm(employed, vacation){
    if(employed === true && vacation === true){
      return false
    }
    if(employed === false && vacation === true){
      return false
    }
    if(employed === true && vacation === false){
      return true
    }
    else{
      return false
    }
  
  }

  //OR

  function setAlarm(employed, vacation){
    return (employed && !vacation) ? true : false;
  }

//====================
 // Double Char
//====================

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// Examples (Input -> Output):

// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

function doubleChar(str) {
    let y = str.split('')
    let z = []
    
    for (let i = 0; i < str.length; i++){
      z.push(str[i] + str[i])
    }
    return z.join('')
  }

  //OR

  function doubleChar(str) {
    return str.split('').map((x)=> x + x).join('')
  }
  