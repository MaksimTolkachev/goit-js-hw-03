const countTotalSalary = function(obj) {
    let totalSalary = 0;
    for (let key in obj) {
      totalSalary += obj[key]
    }
    return totalSalary
  }

  console.log(countTotalSalary({}));

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
);

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
);