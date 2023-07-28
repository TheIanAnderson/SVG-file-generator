const inquirer = require("inquirer");
const colorValidation = [];

const countLetters = (input) => {
  const stringLength = input.length;
  if (stringLength != 3) {
    return "Length must be between 1 and 3 letters.";
  }
  return true;
};

inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "What text would you like on the logo?",
      validate: countLetters,
    },
    {
      type: "input",
      name: "textColor",
      message: "What color would you like the text to be?",
      // validate: "#"
    },
    {
      type: "list",
      name: "shape",
      message: "What shape would you like it to be?",
      choices: ["circle", "square", "triangle"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "What color would you like the shape to be?",
      // validate: "#"
    },
  ])
  .then((data) => {
    if ((data = true)) {
      console.log("thank you for your answers!");
    }
  });

  