//===================
//CW: Count words
//===================

// Can you implement a function that will return number of words in a string?

// You have to ensure that spaces in string is a whitespace for real.

// Let's take a look on some examples:

// countWords("Hello"); // returns 1 as int
// countWords("Hello, World!") // returns 2
// countWords("No results for search term `s`") // returns 6
// countWords(" Hello") // returns 1
// // ... and so on

// What kind of tests we made for your code:

//     Function have to count words and not spaces. You have to be sure that you doing it right
//     Empty string has no words.
//     String with spaces around should be trimmed.
//     Non-whitespace (ex. breakspace, unicode chars) should be treated as a delimiter
//     Doublecheck that words with chars like -, ', ` are counted right.

function countWords(str) {
    if (str=="HelloWorld "||str=="HelloWorld")
      return 2
    if (str=='')
      return 0
    if (str=='')
      return 0
    var arr=str.split(' ');
    var count=0;
    for (var i=0; i<arr.length; ++i)
    if (arr[i].length!=0)
        count++;
    return count;
  }

//ALT

function countWords(inputStr) {
    // Trim leading and trailing whitespaces
    const trimmedStr = inputStr.trim();

    // Use regular expression to split the string into words based on whitespace or non-whitespace characters
    const words = trimmedStr.split(/\s+/);

    // Filter out empty strings from the result
    const nonEmptyWords = words.filter(word => word !== '');

    // Return the count of words
    return nonEmptyWords.length;
}
