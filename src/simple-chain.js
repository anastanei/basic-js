const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value === undefined ? '' : value} )`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== 'number' ||
      position >= this.getLength() ||
      position < 1
    ) {
      this.chain = [];
      throw new Error("You can\'t remove incorrect link!");
    } 

    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const chain = this.chain.join('~~');
    this.chain = [];
    return chain;
  }
};

//  () => ,
//    () => chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd'),
//    () => chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2),
//    () => chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4);
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0));

        //  ,
        //    () => chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd'),
        //    () => chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2),
        //    () => chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4);

module.exports = {
  chainMaker
};
