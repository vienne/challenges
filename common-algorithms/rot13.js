
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var key = ["N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M", "n", "o", "p","q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];

function rot13(str) {
  var newString = "";
  for(var i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      newString += " ";
    } else if (key.indexOf(str[i]) > -1) {
      var letter = key.indexOf(str[i]);
      newString += alphabet[letter];
    } else if (key.indexOf(str[i]) == -1) {
      newString += str[i];
    }
  }
  return newString;
}

rot13("Fraq hf gur pbqr lbh hfrq gb qrpbqr guvf zrffntr");
