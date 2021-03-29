const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  if (Array.isArray(array)) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      switch (item) {
        case '--discard-next':
          i++
          break;
        case '--discard-prev':
          result.pop();
          break;
        case '--double-next':
          if ( i + 1 < array.length) result.push(array[i + 1]);
          break;
        case '--double-prev':
          if ( i - 1 >= 0) result.push(array[i - 1]);
          break;
        default:
          result.push[item];
          break;
      }
      
    }
    return result;
  } else throw new Error();

};
