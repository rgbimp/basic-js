const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const sampleActivityInNum = parseFloat(sampleActivity)
  if (typeof(sampleActivity) !== 'string' || sampleActivityInNum > MODERN_ACTIVITY || Number.isNaN(sampleActivityInNum) || sampleActivityInNum <= 0) {
    return false;
  }
  return Math.ceil( ( Math.log (MODERN_ACTIVITY / sampleActivityInNum) * HALF_LIFE_PERIOD )/ 0.693);
};
