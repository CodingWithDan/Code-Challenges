//==========================================
//Huntober: String Week Challenge - Day 3
//==========================================
// This week we will be discovering hidden messages by manipulating a given string. Your solutions should account for any non-empty string. On Friday we'll combine our functions to decode a message.

// Yesterday you should have come up with a few specific characters that we'll need today. Let's refer to those as our key characters.

// We need to create a function that will replace any instances of any of the key characters in a given string with an empty space (' '). See below for an example with an example set of key characters.

// Remember to keep your code somewhere safe, as you'll need it to decrypt this week's message!

// example key characters -> 'A','_','K','E','Y','!'

// 'AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'
// // implement key replacement function
// ' you could think this is hard to read before replacing the key characters'

// You didn't think I'd just give you the key for the week and let you skip Day 2, did you?

function nah (keys){
    return keys.split('').filter(x => !chars.has(x)).join('')
  }
  let chars = new Set(['A','_','K','E','Y','!'])
  nah('AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters')

//' you could think this is hard to read before replacing the key characters

