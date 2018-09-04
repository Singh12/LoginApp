let arr = [10,20,30,40];

var lsreducer = (accumulator, currentValue) => {
  return  accumulator += currentValue;
}
console.log(arr.reduce(reducer));