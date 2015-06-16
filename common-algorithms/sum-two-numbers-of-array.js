//check if two numbers from unsorted array = a given number

function checkSum(arr, sum) {
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr.length; j++) {
      if (arr[i] != arr[j] && arr[i] + arr[j] == sum) {
        return true;
      }
    }
  }
  return false;
}

function assert(cond, desc) {
  var result = cond ? "pass" : "fail";
  console.log(result + " : " + desc);
}

var test1 = checkSum([1,2,3,5,6],9);
var test2 = checkSum([100,5,7,3,8,5,21], 120);

assert(test1 === true, "should check if sum of two numbers in array = a given number");
assert(test2 === false, "should check if sum of two numbers in array = a given number");
