const getBalanceByCategoryInPeriod = require("./reducer");

const sampleTransactions1 = [
  {
    id: 123,
    sourceAccount: "my_account",
    targetAccount: "supermarket",
    amount: -14,
    category: "groceries",
    time: "2018-03-04",
  },
  {
    id: 125,
    sourceAccount: "my_account",
    targetAccount: "coffee_shop",
    amount: -30,
    category: "eating_out",
    time: "2018-03-12",
  },
  {
    id: 124,
    sourceAccount: "my_account",
    targetAccount: "supermarket",
    amount: -3,
    category: "groceries",
    time: "2018-03-15",
  },
  {
    id: 126,
    sourceAccount: "my_account",
    targetAccount: "cinema",
    amount: -12,
    category: "movies",
    time: "2018-05-15",
  },
  {
    id: 127,
    sourceAccount: "my_account",
    targetAccount: "cinema",
    amount: -2,
    category: "movies",
    time: "2018-05-01",
  },
];

console.log(
  "Output 1: groceries - all within range=",
  getBalanceByCategoryInPeriod(
    sampleTransactions1,
    "groceries",
    new Date("2018-03-01"),
    new Date("2018-03-31")
  )
);

console.log(
  "Output 2: movies - some out of range=",
  getBalanceByCategoryInPeriod(
    sampleTransactions1,
    "movies",
    new Date("2018-05-01"),
    new Date("2018-05-15")
  )
);

console.log(
  "Output 3: movies - all out of range=",
  getBalanceByCategoryInPeriod(
    sampleTransactions1,
    "movies",
    new Date("2018-04-01"),
    new Date("2018-04-15")
  )
);
