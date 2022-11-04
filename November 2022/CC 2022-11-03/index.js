//=================
//Data Reverse
//=================

// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)

// should become:

// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)

// The total number of bits will always be a multiple of 8.

// The data is given in an array as such:

// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]


//So first off, let's establish if this is just numbers. And it is! Not just that, but the length of the array will always be 32 whole positive numbers.
//So ultimately, we want to divide this list of numbers into 4 other arrays of 8. Reverse the order those 4 arrays appear in (but not reverse the actual arrays themselves)
//And then combine them into one array, liek it was originally given to us.

function dataReverse(data) {
    let byte1 = data.slice(0, 8)
    let byte2 = data.slice(8, 16)
    let byte3 = data.slice(16, 24)
    let byte4 = data.slice(24, 32)
    let byte5 = data.slice(32, 40)
    let byte6 = data.slice(40, 48)
    let byte7 = data.slice(48, 56)
    let byte8 = data.slice(56, 64)
    let byte9 = data.slice(64, 72)
    let byte10 = data.slice(72, 80)
    let byte11 = data.slice(80, 88)
    let byte12 = data.slice(88, 96)
    let byte13 = data.slice(96, 104)
    let byte14 = data.slice(104, 112)
    let byte15 = data.slice(112, 120)
    let byte16 = data.slice(120, 128)
    let byte17 = data.slice(128, 136)
    let byte18 = data.slice(136, 144)
    let byte19 = data.slice(144, 152)
    let byte20 = data.slice(152, 160)
    let byte21 = data.slice(160, 168)
    let byte22 = data.slice(168, 176)
    let byte23 = data.slice(176, 184)
    let byte24 = data.slice(184, 192)
    let byte25 = data.slice(200, 208)
    let byte26 = data.slice(208, 216)
    let byte27 = data.slice(216, 224)

    let newArr = [...byte27,...byte26,...byte25,...byte24,...byte23,...byte22,...byte21,...byte20,...byte19,...byte18,...byte17,...byte16,...byte15,...byte14,...byte13,...byte12, ...byte11, ...byte10, ...byte9, ...byte8, ...byte7, ...byte6, ...byte5, ...byte4, ...byte3, ...byte2, ...byte1]
    
   return newArr
  }
  
  dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0])


  //So the above is the first solution I came up with. Very tedious, and obviously the flaw is that it only works if you know how many bytes there are. Let's try to make it more efficient.

  function dataReverse(data) {
    let newArr = []
    
    for (let i = 0; i < data.length; i+= 8){
      newArr.unshift(data.slice(i, i + 8))
    }
    return newArr
  }


//really quick, the above solution would not yield the results we desire. Why? Because we don't have a spread operator preceding data.slice. The above would create an array with 4 separated arrays within it. We just want to return one array with all the numbers unseparated. Spread operators basically are .split(''), or they help turn iterables into individual elements. So what we're doing above is taking each individual element and adding it into newArr. 

function dataReverse(data) {
    let newArr = []
    
    for (let i = 0; i < data.length; i+= 8){
      newArr.unshift(...data.slice(i, i + 8))
    }
    return newArr
  }