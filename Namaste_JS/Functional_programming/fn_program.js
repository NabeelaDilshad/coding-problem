
const radius = [3, 1, 2, 4];
const calculateArea = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};

console.log("area is ---", calculateArea(radius));

const calculateCircumference = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
};

console.log("Circumfernce is ---",calculateCircumference(radius));

const calculateDiameter = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
  }
  return output;
};

console.log("Diameter is ---",calculateDiameter(radius));




// const radius =  [1,3,5]
const area = (radius) => Math.PI * radius * radius
const Circumfernce = (radius) => 2 * Math.PI * radius
const Diameter = (radius) => 2 * radius

const calculate = function (radius, callback) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(callback(radius[i]));
  }
  return output;
};


console.log(calculate(radius, area))
console.log(calculate(radius, Circumfernce))
console.log(calculate(radius, Diameter))