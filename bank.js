"use strict";



function parseAmount(input) {
  if (input === null || input === undefined) {
    throw new Error("Amount is required.");
  }

  if (typeof input !== "string" && typeof input !== "number") {
    throw new Error("Invalid amount type. Enter a string or number.");
  }

  let value = input;

  if (typeof value === "string") {
    value = value.trim();

    
    if (value === "") {
      throw new Error("Amount cannot be empty.");
    }
  }

  const amount = Number(value);

  if (Number.isNaN(amount)) {
    throw new Error("Invalid amount. Enter a valid number.");
  }

  if (amount <= 0) {
    throw new Error("Amount must be greater than zero.");
  }

  return amount;
}


console.log('"5" + 2 =', "5" + 2);
console.log('"5" - 2 =', "5" - 2);


console.log("typeof null =", typeof null);

const amountTests = ["500", " 250 ", "", "abc", null, undefined, "12.5.3"];

for (const input of amountTests) {
  try {
    const result = parseAmount(input);
    console.log("Valid amount:", result);
  } catch (error) {
    console.log("Invalid amount:", error.message);
  }
}
const BANK_NAME = "JS National Bank";
let transactionCounter = 0;

transactionCounter += 1;
console.log("Bank:", BANK_NAME);
console.log("Transaction count:", transactionCounter);
console.log("var before declaration:", hoistedVar);
var hoistedVar = "Available after assignment";
try {
  console.log("let before declaration:", hoistedLet);
} catch (error) {
  console.log("let TDZ error:", error.name + ": " + error.message);
}
let hoistedLet = "Available after declaration";
console.log("let after declaration:", hoistedLet);
announce();

function announce() {
  console.log("Function declaration: announcement is ready.");
}
try {
  notify();
} catch (error) {
  console.log("Function expression error:", error.name + ": " + error.message);
}

var notify = function () {
  console.log("Function expression: notification is ready.");
};

notify();
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log("var loop:", i);
  }, 0);
}

for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log("let loop:", i);
  }, 0);
}
