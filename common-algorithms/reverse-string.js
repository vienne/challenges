//Reverse a string

function reverseString(str) {
  var reverseString = '';
  var splitArray = str.split("");
  for (var i = str.length - 1; i >= 0; i--) {
    reverseString+=str[i];
  }
  return reverseString;
}


function assert(condition, desc) {
  var result = condition ? "pass" : "fail";
  console.log(result + ' : ' +  desc);
}

var test1 = reverseString("does this work?");
var test2 = reverseString("vienne");
assert(test1 == "?krow siht seod", "should reverse string input");
assert(test2 == "ennei", "should reverse string input");
