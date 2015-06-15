//find missing mumber from unsorted array

function findMissingNum(arr) {
  var sortedArray = arr.sort(function(a,b){
    return a-b;
  });
  for (var i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] + 1 != sortedArray[i+1]){
      return sortedArray[i] + 1;
    }
  }
}

function assert(cond, desc) {
  var result = cond ? "pass" : "fail";
  console.log(result + " : " + result)
}

var test1 = [5,4,6,8,10,9];
var test2 = [2000,1999,1997,1996,1995,1994];
findMissingNum(test1);
findMissingNum(test2);

assert(findMissingNum(test1) == 7, "finding the missing number from an unsorted array");
assert(findMissingNum(test2) == 1998, "finding the missing number from an unsorted array");
