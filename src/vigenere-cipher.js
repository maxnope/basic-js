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
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    message = message.toUpperCase();
    key = key.toUpperCase();
    let encrypted = '';
    let index = 0;

    for (const char of message) {
      if (char >= 'A' && char <= 'Z') {
        const shift = key[index % key.length].charCodeAt(0) - 'A'.charCodeAt(0);
        const encryptedChar = String.fromCharCode(((char.charCodeAt(0) - 'A'.charCodeAt(0) + shift) % 26) + 'A'.charCodeAt(0));
        encrypted += encryptedChar;
        index++;
      } else {
        encrypted += char;
      }
    }

    if (this.direct) {
      return  encrypted;
    } else {
      return encrypted.split('').reverse().join('')
    }
  }

  decrypt(encrypted, key) {
    if (!encrypted || !key) throw new Error('Incorrect arguments!');

    encrypted = encrypted.toUpperCase();
    key = key.toUpperCase();
    let decrypted = '';
    let keyIndex = 0;

    for (const char of encrypted) {
      if (char >= 'A' && char <= 'Z') {
        const shift = key[keyIndex % key.length].charCodeAt(0) - 'A'.charCodeAt(0);
        const decryptedChar = String.fromCharCode(((char.charCodeAt(0) - 'A'.charCodeAt(0) - shift + 26) % 26) + 'A'.charCodeAt(0));
        decrypted += decryptedChar;
        keyIndex++;
      } else {
        decrypted += char;
      }
    }

    if (this.direct) {
      return  decrypted;
    } else {
      return decrypted.split('').reverse().join('')
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
