"use strict";
/**
 * 
 * @param {Array} arr 

 */
const insertShiftArray = (arr, value) => {
  let newArr = [];

  let middle = arr.length ? Math.ceil(arr.length / 2) : newArr.push(value);
  arr.forEach((element, index) => {
    newArr.push(element);

    if (middle == index + 1) {
      newArr.push(value);
    }
  });
  return newArr;
};

console.log(insertShiftArray([1, 2, 3], 10));

module.exports = insertShiftArray;
