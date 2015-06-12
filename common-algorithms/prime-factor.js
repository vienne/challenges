//How could you find all prime factors of a number?

//keep dividing by 2 and then increase to 3, etc.
function findPrimeFactors(num) {
  var factors = [];
  var factor = 2;

  while (num > 2) {
    if (num % factor === 0) {
      factors.push(factor);
      num = num / factor;
    } else {
      ++factor;
    }
  }
    return factors;
}


function assert(condition, desc) {
  var result = condition ? "pass" : "fail";
  console.log(result + " : " + desc);
}

//comparing 2 arrays
function compareArrays(a1, a2) {
  if (a1.length != a2.length) {
    return false;
  }
  for (var i = 0; i < a1.length; i++) {
    if (a1[i] != a2[i]) {
      return false;
    }
  }
  return true;
}

var test1 = findPrimeFactors(35);
var test2 = findPrimeFactors(120);
assert(compareArrays(test1, [5,7]), "checking prime factors of a number");
assert(compareArrays(test2, [2,2,2,3,5]), "checking prime factors of a number");
