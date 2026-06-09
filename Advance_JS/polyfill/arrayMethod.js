console.log("Array method polyfill");

const arr = [1, 2, 3, 4, 5];

Array.prototype.mymap = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};


function getDouble(arr) {
  return arr.mymap((item, index , array) => {
    return item * 4;
  });
}

console.log(getDouble(arr));



// polyfill for filter method

Array.prototype.myfilter = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
}

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getEven(arr) {
  return arr.myfilter((item) => {
    return item % 2 === 0;
  });
}

console.log(getEven(arr2));