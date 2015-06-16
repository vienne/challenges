//i. Given an array of integers between 1 and 1,000,000. One integer is in the twice. Find the duplicate.

function findDuplicate(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++){
      if (arr[i] == arr[j] && i != j ) {
        return arr[i];
      }
    }
  }
}


function assert(condition, desc) {
  var result = condition ? "pass" : "fail";
  console.log(result + ' : ' +  desc);
}

var resultPass = findDuplicate([1,2,3,4,5,5]);
var resultFail = findDuplicate([1,2,3,3,4,5]);
assert(resultPass == 5, 'should find duplicate integer in array');
assert(resultFail == 4, 'should find duplicate integer in array');
