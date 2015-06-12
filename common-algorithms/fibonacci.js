//How do get nth Fibonacci number?

function fibo(num) {
  if (num <= 1) {
    return n;
  }
  var result = fibo(n-1) + fibo(n-2);
  return result;
}


function fibonacci(num) {
  var result = 1;
  var first = 0;
  var second = 1;

  while (var i = 1; i < num; i++) {
    result = first + second;
    first = second;
    second = result;
    i++;
  }
}

  for (var i = 2; i < num.length; i++) {
    fibo[i] = fibo[i-1] + fibo[i-2];
    return fibo[i];
  }

}
