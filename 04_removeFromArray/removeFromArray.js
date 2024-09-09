const removeFromArray = function (array, ...args) {
  // EASIER AND EASY TO UNDERSTAND SOLUTION

  /* const newArray = [];
  for (const element of array) {
    if (!args.includes(element)) {
      newArray.push(element);
    }
  }
  return newArray; */

  // SIMPLE AND ADVANCED SOLUTION

  return array.filter((element) => !args.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
