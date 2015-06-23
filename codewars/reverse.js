//write the reverse method

Array.prototype.doop = function() {
  for (var i = 0, j = this.length - 1; i < this.length, i < j; i++, j--) {
    var hold = this[i];
    this[i] = this[j];
    this[j] = hold;
  }
  return this;
};

//var input = [1, 2, 3, 4];
//input.reverse(); // == [4, 3, 2, 1]  // returned by .reverse()
//input;           // == [4, 3, 2, 1]  // items reordered in the original array
