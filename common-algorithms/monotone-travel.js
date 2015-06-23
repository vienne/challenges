var buy = function(x, arr){
  var newArr = arr.sort(function(a, b){return a-b})
  var answer = [];
  for (var i = 0; i < newArr.length - 1; i++) {
    for (var j = 1; j < newArr.length; i++) {
      if ( newArr[i] + newArr[j] == x && i != j) {

        answer.push(i);
        answer.push(j);
      }
    }
  }
  return answer;
};

buy(2, [1,1])

//buy(2,[1,1])       = [0,1]
//buy(3,[1,1])       = null
//buy(5,[5,2,3,4,5]) = [1,2]


//[1,2,3,2]
var isMonotone = function(arr){
  var right;
  if (arr.length = 0 || 1) {
  right = true;
  } else {
      for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 1; j < arr.length; j++) {
          if (arr[i] > arr[j] && i != j) {
          return false;
          } else if (arr[i] < arr[j] && i != j) {
          right = true;
          }
        }
  }
  return right;
}

var a = [1,2,3,2];
isMonotone(a);
