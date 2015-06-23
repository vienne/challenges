//Finish the solution so that it takes an input 'n' (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.

//Assume: 0 <= n < 1000000000

//       1  ->           "1"
//      10  ->          "10"
//     100  ->         "100"
//    1000  ->       "1,000"


function groupByCommas(n) {
  var newArray = n.toString().split("").reverse();
  var len = newArray.length;
  var output = [];
  for (var i = 0; i < len; i++) {
    if (len > 3 && (i + 1) % 3 == 0 && i != 0 && i !=len -1) {
      output.push(newArray[i]);
      output.push(",");
    } else {
      output.push(newArray[i]);
    }
  }
  var answer = output.reverse().join("").toString();
  return answer;
}

groupByCommas(100000000);
