const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);
// making code declarative 
// like functional programming
// 
const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100
});

const getLimit = (user => spendingLimits?.[user] ?? 0);

const addExpense = function (state, value, description, user = "jonas") {
  const cleanUser = user.toLowerCase();
  if (value <= getLimit(cleanUser))
    return [...state, { value: -value, description: description, user: cleanUser }];
  return state;
};
const newBudget = addExpense(budget, 10, 'Pizza 🍕');
const newBudget2 = addExpense(newBudget, 100, 'Going to movies 🍿', 'Matilda');
const newBudget3 = addExpense(newBudget2, 200, 'Stuff', 'Jay');
// console.log(budget);

const checkExpenses = function (state) {

  state = state.map(function (entry) {
    if (entry.value < -getLimit(entry.user))
      return { ...entry, flag: "limit" };
    return entry;
  })
  return state;


};
const newBudget4 = checkExpenses(newBudget3);
// console.log(newBudget4);

const logBigExpenses = function (state, limit) {
  const bigExpenses = state.map(entry => {
    return (entry.value <= -limit ? entry.description.slice(-2) : '');
  }).filter(str => str !== '').join(' / ');
  console.log(bigExpenses);
  return state;
  // let output = '';
  // for (const entry of budget) {
  //   output += entry.value <= -limit ? entry.description.slice(-2) + ' / ' : ''; // Emojis are 2 chars

  // }
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
};
console.log(budget);
const finalBudget = logBigExpenses(newBudget4, 1000);
