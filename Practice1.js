var bankBalance = prompt("What is your bank balance?");

const TAX_RATE = 0.08;
const PHONE_COST = 159.99;
const ACCESORY_COST = 14.99;
const SPENDING_THRES = 200;

var amount = PHONE_COST + ACCESORY_COST;

function withTax(amt) {
  amt = amt + (amt * TAX_RATE);
  return amt;
}

function dollarFormat(plusTax) {
  plusTax = "$" + plusTax.toFixed(2);
  return plusTax;
}

if (amount < SPENDING_THRES) {
  amount = withTax(amount);
} else {
  console.log("No, thank you.");
}

while (amount < bankBalance) {
  bankBalance = bankBalance - amount;
}

console.log("Amount:" + dollarFormat(amount) + " ; " + "BankBalance:" + dollarFormat(bankBalance));
