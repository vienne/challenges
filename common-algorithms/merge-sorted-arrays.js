//merge two sorted arrays

//longwinded version
function mergeArrays(arr1, arr2) {
  var combinedArray = [];
  var num1, num2;

  while(arr1.length && arr2.length){
      if (arr1[0] < arr2[0]) {
        num = arr1.shift();
        combinedArray.push(num1);
      } else if (arr2[0] < arr1[0]) {
        num = arr2.shift();
        combinedArray.push(num);
      } else if (arr1[0] == arr2[0]) {
        num1 = arr1.shift();
        num2 = arr2.shift();
        combinedArray.push(num1);
        combinedArray.push(num2);
      }
  }
      while (arr1.length) {
        num1 = arr1.shift();
        combinedArray.push(num1);
      }
      while (arr2.length) {
        num1 = arr2.shift();
        combinedArray.push(num1);
      }

  return combinedArray;
}


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

function assert(cond, desc) {
  var result = cond ? "pass" : "fail";
  console.log(result + " : " + desc);
}

var test1 = mergeArrays([1,3,5,11,21], [2,6,7,18]);
var test2 = mergeArrays([19,150,200,500], [150,201,501,1000,100000]);

assert(compareArrays(test1, [1, 2, 3, 5, 6, 7, 11, 18, 21]), "should merge two sorted arrays");
assert(compareArrays(test2, [19,150,150,200,201,500,501,1000,100000]), "should merge two sorted arrays");
