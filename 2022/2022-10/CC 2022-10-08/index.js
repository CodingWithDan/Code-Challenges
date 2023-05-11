//========================================
//Huntober: String Week Challenge - Day 1
//=========================================

// This week we will be discovering hidden messages by manipulating a given string. Your solutions should account for any non-empty string. On Friday we'll combine our functions to decode a message.

// Oh no! How did this happen?! Somehow similar-looking numbers and letters have been confused in our document. Someone may have been messing around writing naughty words on a calculator. We need to get them back to normal.

// Below, find the mix-ups that have been made. Note: the confusion happened in both directions and was case-sensitive.

// '0' <-> 'O'      '5' <-> 'S'
// '1' <-> 'I'      '6' <-> 'G'
// '2' <-> 'Z'      '7' <-> 'L'
// '3' <-> 'E'      '8' <-> 'B'
// '4' <-> 'h'      '9' <-> 'q'

// As an example, here is how a string looks before and after the characters are fixed:

// "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770." 
// // implement fix function -> 
// "PRO-TIP #498: IT'S NICE TO SAY HELLO."

// Please create a function that will fix a given string of this mistake before incalculable damage can be done!



function change (pinput){
    const translate = {
        '0': 'O',  'O': '0',
        '1':'I',   'I':'1',
        '2':'Z',   'Z':'2',
        '3':'E',   'E':'3',
        '4':'h',    'h':'4',
        '5': 'S',   'S':'5',
        '6':'G',    'G':'6',
        '7':'L',    'L':'7',
        '8':'B',    'B':'8',
         '9':'q',   'q':'9',
        };

    return [...pinput].map(x => translate[x] ? translate[x] : x).join('')
}
let sent = "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."

change(sent.split(''))

//"PRO-TIP #498: IT'S NICE TO SAY HELLO."