#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, //BASE CURRENCY
    PKR: 278.7,
    EUR: 0.93,
    GBP: 0.8,
    SAR: 3.75,
    KWD: 0.31,
    RMB: 7.23,
    RUB: 91.63,
    TRY: 32.22,
};
let userAnswer = await inquirer.prompt([
    {
        name: "convertFrom",
        message: " From which currency you want to convert:",
        type: "list",
        choices: ["USD", "PKR", "EUR", "GBP", "SAR", "KWD", "RMB", "RUB", "TRY"],
    },
    {
        name: "convertTO",
        message: " To which currency you want to convert:",
        type: "list",
        choices: ["USD", "PKR", "EUR", "GBP", "SAR", "KWD", "RMB", "RUB", "TRY"],
    },
    {
        name: "amount",
        message: "Enter your amount:",
        type: "number",
    },
]);
let fromAmount = currency[userAnswer.convertFrom];
let toAmount = currency[userAnswer.convertTO];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
