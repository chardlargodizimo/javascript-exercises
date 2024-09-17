const sumAll = function (m, n) {
  let sum = 0;

  if (!Number.isInteger(m) || !Number.isInteger(n) || m < 0 || n < 0)
    return "ERROR";

  if (m > n) [m, n] = [n, m];

  for (let i = m; i <= n; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
