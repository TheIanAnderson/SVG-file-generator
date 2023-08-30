const svgFile = require("./index");
const isCircle = require("./lib/shapes");
const fs = require("fs");
const currentShape = require("./currentShape");
const shape = JSON.stringify(currentShape);

// test("check if it's a triangle", () => {
//   expect(shape).toContain("polygon" || "circle" || "square");
// });

test("check if it's a triangle", () => {
  expect(shape).toContain("polygon");
});

test("check if it's a square", () => {
  expect(shape).toContain("rect");
});

test("check if it's a circle", () => {
  expect(shape).toContain("circle");
});
