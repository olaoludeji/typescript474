import { XORCipher } from '../xor_cipher'

/**
 * @description Tested an implementation of a XOR cipher using strings and numbers
 * as arguments to encrypt and decrypt messages, checking their equality before and
 * after encryption/decryption.
 */
describe('Testing XORCipher function', () => {
  it('passing a string & number as an argument', () => {
    expect(XORCipher('test', 32)).toBe('TEST')
    expect(XORCipher('TEST', 32)).toBe('test')
  })
})
