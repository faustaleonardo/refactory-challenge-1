const checkFirstCondition = year => year % 400 === 0;
const checkSecondCondition = year =>
  year % 100 !== 0 && year % 400 !== 0 && year % 4 === 0;

const checkLeapYear = (startYear, endYear) => {
  console.log(`Leap Year Between ${startYear} and ${endYear}:`);
  for (let year = startYear; year < endYear; year++) {
    if (checkFirstCondition(year) || checkSecondCondition(year)) {
      console.log(year);
    }
  }
};

checkLeapYear(1899, 2017);
