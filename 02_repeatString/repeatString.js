const repeatString = function (word, runs) {
  let str = "";

  if (runs < 0) return "ERROR";

  for (let i = 0; i < runs; i++) {
    str += word;
  }

  return str;
};

// Do not edit below this line
module.exports = repeatString;
