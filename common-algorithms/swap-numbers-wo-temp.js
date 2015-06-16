//how do you swap two numbers without using temporary variables?

function swapNumbers(num1, num2) {
  var diff = 0;
  if (num1 < num2) {
    diff = num2 - num1;
    num1 = num2 + diff;
    num2 = num1 - diff;

    num1 -= diff;
    num2 -= diff;

    console.log(num1, num2);
  } else if (num1 > num2) {
    diff = num1 - num2;
    num1 = num2 + diff;
    num2 = num1 - diff;

    num1 -= diff;
    num2 += diff;

    console.log(num1, num2);
  } else {
    console.log(num1, num2);
  }
}

var test1 = swapNumbers(1,2);
var test2 = swapNumbers(2,1);
var test3 = swapNumbers(100,2000);
var test4 = swapNumbers(2000,100);
