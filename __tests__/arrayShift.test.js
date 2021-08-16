"use strict";
const insertShiftArray = require("../index");
describe("logger middleware", () => {
  it("should insert the value in the middle of even array)", () => {
    expect(insertShiftArray([1, 2], 5)).toEqual([1, 5, 2]);
  });
  it("should insert the value in the middle of odd array)", () => {
    expect(insertShiftArray([1, 2, 3], 5)).toEqual([1, 2, 5, 3]);
  });
  it("should insert the value in the middle of empty array)", () => {
    expect(insertShiftArray([], 5)).toEqual([5]);
  });
});
