//How would you verify a prime number?

function checkPrime(num){
  var factor = 2;

  while (num > factor) {
    if (num % factor === 0) {
      return false;
    } else {
      ++factor;
    }
    return true;
  }
}


function assert(condition, desc) {
  var result = condition ? "pass" : "fail";
  console.log(result + ' : ' + desc);
}

var positive = checkPrime([23]);
var negative = checkPrime([12]);
assert(positive === true, "should verify if number is prime");
assert(negative === false, "should verify if number is prime");
