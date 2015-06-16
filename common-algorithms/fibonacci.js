//How do get nth Fibonacci number?


// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
//using loop
function fibonacci(num) {
  var sum = 1;
  var first = 0;
  var second = 1;
  if (num === 1 || num === 2) {
    return 1;
  } else {
    for (var i = 1; i < num; i++) {
      sum = first + second;
      first = second;
      second = sum;
    }
  }
  return sum;
}

function assert(condition, desc) {
  var result = condition ? "pass" : "fail";
  console.log(result + " : " + desc);
}


//using recrusive function

function recursiveFibo(num) {
  if (num <= 1) {
    return num;
  }
  var result = recursiveFibo(num-1) + recursiveFibo(num-2);
  return result;
}

var test1 = fibonacci(8);
var test2 = fibonacci(20);
var test3 = recursiveFibo(5);
var test4 = recursiveFibo(15);
assert(test1 === 21, "should find nth fibonnacci number");
assert(test2 === 6765, "should find nth fibonnacci number");
assert(test3 === 5, "should find nth fibonnacci number");
assert(test4 === 610, "should find nth fibonnacci number");
