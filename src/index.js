
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  if (!matrix) return [];

  matrix.forEach((item, i) => {
    if (!(i&1))  arr = arr.concat(item);
    else arr = arr.concat(item.reverse());
    })
return arr;
}
