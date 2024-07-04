#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magentaBright.bold.italic("\t <<<<<<<<<<<<<<<<==============================>>>>>>>>>>>>>>"));
console.log(chalk.yellowBright.bold.italic("====<<<< Welcome To 'Code_With_Saad' ***Quiz System*** >>>>>====="));
console.log(chalk.green.bold.italic("\t <<<<<<<<<<<<<<<<==============================>>>>>>>>>>>>>>"));
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1:What is the correct way to check if two values are equal are not equal in Typescript?",
        choices: ["a == b", "a = b", "a = b", "a !==b"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2:Which keyword is used to declare a constant in TypeScript?",
        choices: ["Let", "var", "Const", "static"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3:Which TypeScript feature allows for combining multiple types into one?",
        choices: ["Interfaces", "Generics", "Enums", "Union"]
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4:What does the any type signify in TypeScript?",
        choices: ["It represents any object", "It represents any number", "It represents any type", "It represents any string"]
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5:How can you specify that a function parameter is optional in TypeScript?",
        choices: ["Using the maybe keyword", "Using the optional keyword", "Using the undefined keyword", "By appending a question mark ? to the parameter"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "a !==b":
        console.log(chalk.bgGreenBright.bold.italic("\n1: Correct!!"));
        ++score;
        break;
    default:
        console.log(chalk.bgRedBright.bold.italic("\n1. Incorrect!"));
}
switch (quiz.question_2) {
    case "Const":
        console.log(chalk.bgGreenBright.bold.italic("\n2: Correct!!"));
        ++score;
        break;
    default:
        console.log(chalk.bgRedBright.bold.italic("\n2. Incorrect"));
}
switch (quiz.question_3) {
    case "Union":
        console.log(chalk.bgGreenBright.bold.italic("\n3: Correct!!"));
        ++score;
        break;
    default:
        console.log(chalk.bgRedBright.bold.italic("\n3. Incorrect"));
}
switch (quiz.question_4) {
    case "It represents any type":
        console.log(chalk.bgGreenBright.bold.italic("\n4: Correct!!"));
        ++score;
        break;
    default:
        console.log(chalk.bgRedBright.bold.italic("\n4. Incorrect"));
}
switch (quiz.question_5) {
    case "By appending a question mark ? to the parameter":
        console.log(chalk.bgGreenBright.bold.italic("\n5: Correct!!"));
        ++score;
        break;
    default:
        console.log(chalk.bgRedBright.bold.italic("\n5. Incorrect"));
}
console.log(chalk.yellowBright.bold.italic.underline(`Your Score is:${score}`));
