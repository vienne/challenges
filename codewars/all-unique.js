//Write a program to determine if a string contains all unique characters. Return True/true if it does and False/false otherwise.

//The string may contain any of the 128 ASCII characters.

function hasUniqueChars(str){
  var newArray = str.split("");
  for (var i = 0; i < newArray.length-1; i++) {
    if (newArray[i] == newArray[i + 1]) {
      return false;
    } else {
      return true;
    }
  }
}
