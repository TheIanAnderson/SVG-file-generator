const inquirer = require("inquirer");
const fs = require("fs");
const shapeOptions = ["Triangle", "Circle", "Square"];

function createClass(inputValues) {
  class shapeClass {
    constructor() {
      this.color = inputValues.shapeColor;
      this.shape = inputValues.shapeChoice;
      this.textColor = inputValues.lettersColor;
    }
  }
  let newShape = new shapeClass(inputValues);
  testShape(newShape);
}

function testShape(object) {
  if ((object.color = "")) {
    console.log("it works!");
  } else {
    console.log("That's not a color");
  }
}
function writeToSVGFile(inputValues, newShape) {
  switch (inputValues.shapeChoice) {
    case "Triangle":
      newShape = `<polygon points="100,25 25,225 175,225" fill="${inputValues.shapeColor}" />`;
      break;
    case "Circle":
      newShape = `<circle cx="100" cy="150" r="100" fill="${inputValues.shapeColor}" />`;
      break;
    case "Square":
      newShape = `<rect x="50" y="100" width="100" height="100"  fill="${inputValues.shapeColor}" />`;
      break;
  }

  let svgTemplate = `<svg width="200" height="300" xmlns="http://www.w3.org/2000/svg">
  ${newShape}
  <text x="100" y="150" text-anchor="middle" alignment-baseline="middle" fill="${inputValues.lettersColor}" font-size="20">
    ${inputValues.lettersChoice}
  </text>
</svg>`;
  fs.writeFile("logo.svg", `${svgTemplate}`, () => {});
}

inquirer
  .prompt([
    {
      type: "list",
      message: "What shape would you like to create?",
      choices: shapeOptions,
      name: "shape",
    },
    {
      type: "input",
      message: "What color do you want the shape to be?",
      name: "shapeColor",
    },
    {
      type: "input",
      message:
        "What letters would you like displayed on the shape? (Must be 3 letters exactly)",
      name: "letters",
      validate: testString,
    },
    {
      type: "input",
      message: "What color do you want the letters to be?",
      name: "lettersColor",
    },
  ])
  .then((input) => {
    inputValues = {
      shapeChoice: input.shape,
      shapeColor: input.shapeColor,
      lettersChoice: input.letters,
      lettersColor: input.lettersColor,
    };
    createClass(inputValues);
    writeToSVGFile(inputValues);
  });

function testString(lettersChoice) {
  if (lettersChoice.length > 3 || lettersChoice.length < 3) {
    console.log("You must input exactly 3 letters");
  } else if (lettersChoice.length === 3) {
    return true;
  }
}

module.exports = testShape;
