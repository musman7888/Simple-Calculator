#! /usr/bin/env node

import inquirer from "inquirer";

// user input section

const questions = await inquirer.prompt([
  { message: "Enter First Number: ", type: "number", name: "firstNumber" },
  { message: "Enter Second Number: ", type: "number", name: "secondNumber" },
  {
    message: "Select An Operation to Perform :",
    type: "list",
    name: "Operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// calculation and results

if(questions.Operator === "Addition")
{
    console.log(questions.firstNumber + questions.secondNumber)
}
else if(questions.Operator === "Subtraction")
{
    console.log(questions.firstNumber - questions.secondNumber)
}
else if(questions.Operator === "Multiplication")
{
    console.log(questions.firstNumber * questions.secondNumber)
}
else if(questions.Operator === "Division")
{
    console.log(questions.firstNumber / questions.secondNumber)
}
else
{
    console.log("Please enter valid number")
}