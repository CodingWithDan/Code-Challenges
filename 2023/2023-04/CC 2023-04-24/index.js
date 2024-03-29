//===========================
//Did she say hallo?
//===========================
// You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

// Write a simple function to check if the string contains the word hallo in different languages.

// These are the languages of the possible people you met the night before:

//     hello - english
//     ciao - italian
//     salut - french
//     hallo - german
//     hola - spanish
//     ahoj - czech republic
//     czesc - polish

// Notes

//     you can assume the input is a string.
//     to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
//     function should be case insensitive to pass the tests

function validateHello(greetings) {
  const newStr = greetings.toLowerCase();

  if (newStr.includes('hello') ||
      newStr.includes('ciao')  ||
      newStr.includes('salut') ||
      newStr.includes('hallo') ||
      newStr.includes('hola')  ||
      newStr.includes('ahoj')  ||
      newStr.includes('czesc')) {
    return true;
  } else return false;
}

  //ALT

  function validateHello(greeting) {
    let greetings = greeting.toLowerCase().split(' ')
    return greetings.includes('hello') || greetings.incldues('ciao') || greetings.includes('salut') || greetings.includes('hallo') || greetings.includes('hola') || greetings.includes('czesc') || greetings.includes('ahoj')  ? true : false
  }
  

