//count the number of zeros from 1 to n

function countZeros(n) {
  var i = 1;
  var zeroArray = [];
  while (i <= n) {
    var arr = i.toString().split("");
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] === 0) {
        zeroArray.push(arr[j]);
      }
    }
    i++;
  }
  return zeroArray.length;
}

function assert(cond, desc) {
  var result = cond ? "pass" : "fail";
  console.log(result + " : " + desc);
}

var test1 = countZeros(105); //16
var test2 = countZeros(10); //1

assert(test1 == 16, "should count the number of zeros from 1 to the given number");
assert(test2 == 1, "should count the number of zeros from 1 to the given number");
