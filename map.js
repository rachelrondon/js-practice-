let recipe = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion', 50]
]);

/* iterate over values (amounts); */
for (let vegetable of recipe.keys()) {
  console.log(vegetable);
}

/* iterate over values (amounts) */

for (let amount of recipe.values()) {
  console.log(amount);
}


/* iterate over [key, values] entries */

for (let item of recipe) {
  console.log(item);
}
