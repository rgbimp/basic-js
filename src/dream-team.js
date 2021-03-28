const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(team) {
  if (Array.isArray(team)) {
    let nameOfTeam = [];
    team.forEach( item => (typeof(item) === 'string') ? nameOfTeam.push(item.replace(/^\s+/, '')[0].toUpperCase()) : nameOfTeam);
    return nameOfTeam.sort().join('');
  }
  return false;
};
