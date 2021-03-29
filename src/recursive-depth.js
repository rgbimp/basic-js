const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(array) {
    let count = 0;
    let a = array.filter( item => {
      return (Array.isArray(item)) 
    })
    if (a.length == 0) {
      return 1;
    } else {
      return a.map( item => this.calculateDepth(item)).sort( (a,b) => b-a)[0] + 1;
    }
  }
};