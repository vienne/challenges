//How would you find the greatest common divisor of two numbers?

function commonDivisor(num1, num2) {
  var divisor = 2;
  var greatest = 1;

  if (num1 < 2 || num2 < 2) {
    return 1;
  }

  while (num1 >= divisor && num2 >= divisor) {
    if (num1 % divisor === 0 && num2 % divisor === 0) {
      greatest = divisor;
    }
    divisor++;
  }
  return greatest;
}

function assert(condition, desc) {
  var result = condition ? "pass" : "fail";
  console.log(result + " : " + desc);
}

var test1 = commonDivisor(10, 15);
var test2 = commonDivisor(11, 13);
assert(test1 == 5, "should find greatest commonDivisor for two numbers");
assert(test2 == 1, "should find greatest commonDivisor for two numbers");
