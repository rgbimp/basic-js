const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value !== undefined) {
      this.chain.push(`( ${value} )`);
    } else {
      this.chain.push('( )');
    }
    
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) && position < this.chain.length && position >= 0) {
      this.chain.splice(position-1, 1);
    } else {
      this.chain = []; 
      throw new Error();
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const temp = this.chain;
    this.chain = [];
    return temp.join('~~')
  }
};

module.exports = chainMaker;
