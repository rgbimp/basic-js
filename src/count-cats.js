const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let count = 0;
  if (!!backyard.length) {
    backyard.reduce( (a,b) => a.concat(b))
          .forEach( item => (item === '^^') ? count++ : count);
  }
  return count;
};
