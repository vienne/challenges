//How do you verify a word is a palindrome?


function checkPalindrome(str) {
  var wordArray = str.split("");
  var backwards = str.split("").reverse();
  for (var i = 0; i < wordArray.length; i++) {
    if (wordArray[i] != backwards[i]) {
      return false;
    } else {
      return true;
    }
  }
}


function assert(cond, desc) {
  var result = cond ? "pass" : "fail";
  console.log(result + " : " + desc)
}

//fear of palindromes:
var test1 = checkPalindrome("aibohphobia");
var test2 = checkPalindrome("hello");

assert(test1, "word is a palindrome");
assert(test2, "word is a palindrome");
