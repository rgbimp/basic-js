const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  
  if (options) {
    let resultStr = '';
    let {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'} = options;
    let additionArr = new Array(additionRepeatTimes);
    let tempStr = `${str}${additionArr.fill(`${addition}`).join(additionSeparator)}`;
    let strArr = new Array(repeatTimes);
    resultStr = strArr.fill(tempStr).join(separator);
    return resultStr;
  }
  return str;
};
  
