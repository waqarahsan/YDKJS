var bankBalance = prompt("What is your bank balance?");

const TAX_RATE = 0.08;
const PHONE_COST = 159.99;
const ACCESORY_COST = 14.99;
const SPENDING_THRES = 500;

var amount = 0;

function withTax(amount) { //to calculate the tax
  return amount * TAX_RATE;
}

function dollarFormat(amount) { //format the amount to dollar format
  return "$" + amount.toFixed(2);
}


while (amount < bankBalance) { //continue to buy phone if it is under balance
  amount = amount + PHONE_COST;

  if (amount < SPENDING_THRES) { //buy accessory if under threshold
    amount = amount + ACCESORY_COST;
  }
}

amount = amount + withTax(amount);

console.log("Your purchase: " + dollarFormat(amount));

if (amount > bankBalance){
  console.log("This purchase is above your means.")
}
