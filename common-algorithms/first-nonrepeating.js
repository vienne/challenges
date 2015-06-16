//ii. Find the first non-repeating character in a string:("DEFD" -> E)

function findFirstUnique(str) {
  var st = str.toLowerCase();
  var notUniq;
  for (var i = 0; i < st.length; i++) {
    notUniq = false;
    for (var j = 0; j < st.length; j++) {
      if (i != j && st[i] == st[j]) {
        notUniq = true;
        break;
      }
    }
    if (notUniq === false) {
      return st[i];
    }
  }
}

function assert(condition, desc) {
  var result = condition ? "pass" : "fail";
  console.log(result + ': ' +  desc);
}

var testPass = findFirstUnique("AbcBa");
var testFail = findFirstUnique("abcdefabcdf");
assert(testResult == "c", 'should find first unique character in a string');
assert(testResult == "a", 'should find first unique character in a string');
