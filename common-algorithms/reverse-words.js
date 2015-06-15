///reverse words in a sentence

function reverseWords(str) {
  return str.split('').reverse().join('').split(' ').reverse().join(' ');
}

function assert(cond, desc) {
  var result = cond ? "pass" : "fail";
  console.log(result + " : " + desc);
}


var test1 = "Howdy Neighbor!";
var test2 = "ABC DEF GHI JKL MNO P";

assert(reverseWords(test1) == "ydwoH !robhgieN", "testing function to reverse words in a sentence");
assert(reverseWords(test2) == "CBA FED IHG LKJ ONM P", "testing function to reverse words in a sentence");
