//find the largest sum of two elements in an array

function largestSum(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length - 1; i++) {
    for(var j = 1; j < arr.length; j++) {
      if(arr[i] + arr[j] > sum) {
        sum = arr[i] + arr[j];
      }
    }
  }
  return sum;
}

function assert(cond, desc) {
  var result = cond ? "pass" : "fail";
  console.log(result + " : " + desc);
}

var test1 = largestSum([1,2,4,3,5]);
var test2 = largestSum([1,1,1,1,1,1]);

assert(test1 == 9, "should find largest sum of two elements in the array");
assert(test2 == 2, "should find largest sum of two elements in the array");
