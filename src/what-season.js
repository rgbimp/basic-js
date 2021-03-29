const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  const seasons = Object.entries({
    'winter': [11, 0, 1],
    'spring': [2,3,4],
    'summer': [5,6,7],
    'autumn': [8,9,10] 
  });

  if (date === undefined) {return 'Unable to determine the time of year!';}
  if (date instanceof Date && !date.hasOwnProperty('getMonth')){
    let month = date.getMonth()
    for (let [key, value] of seasons) {
      if (value.includes(month)) {return key}
    }
  } else {
  throw new Error();
  }
};
