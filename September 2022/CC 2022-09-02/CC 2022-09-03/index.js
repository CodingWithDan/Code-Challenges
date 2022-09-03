//==========================
//The Feast of Many Beasts
//==========================
// Description:

// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

//P: Receive two strings, the first being the name of an animal, the second the name of a food dish. Each string can be either a single word or have multiple words
//R: If the first and last letter of string#1 has the same first and last letter of string#2, return true. Else, return false
//E:"great blue heron", "garlic naan" --> true
//E: "brown bear", "bear claw" --> false
//P: return true if beast[0] + beast.slice(-1) === dish[0] + dish[dish.length - 1]

function feast(beast, dish) {
    return (beast[0]+beast.slice(-1) == dish[0]+dish[dish.length -1])
    }
