/**
 * @description Replaces each character in a given string with a new character that
 * is the result of XOR-ing the original character's ASCII code with a given key value.
 * 
 * @param { string } str - string that is being searched and replaced with a new value
 * using the provided formula.
 * 
 * @param { number } key - 8-bit ASCII character that is used to modifier the original
 * string.
 * 
 * @returns { string } a ciphered string based on the provided key and the original
 * input string.
 */
export const XORCipher = (str: string, key: number): string =>
  str.replace(/./g, (char: string) =>
    String.fromCharCode(char.charCodeAt(0) ^ key)
  )
