const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  #checkArgs(string, key) {
    if (!string || !key) {
      throw new Error('Incorrect arguments!');
    }
  }

  #getIndex(char) {
    return char.toUpperCase().charCodeAt(0) - 65
  }

  #crypt(string, key, isEncrypting = 1) {

    this.#checkArgs(string, key);
    let keyIndex = 0;

    const result = string
      .split('')
      .map((char) => {
        if (!/[A-Z]/i.test(char)) return char;
        const keyValue = this.#getIndex(key[keyIndex % key.length]) * isEncrypting;
        const resChar = String.fromCharCode(((this.#getIndex(char) + keyValue + 26) % 26) + 65);
        keyIndex += 1;
        return resChar;
      })
      .join('');

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  encrypt(string, key) {
    return this.#crypt(string, key);
  }

  decrypt(string, key) {
    return this.#crypt(string, key, -1);
  }
}

  (module.exports = {
    VigenereCipheringMachine
  });
