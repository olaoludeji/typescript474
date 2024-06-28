/**
 * @description Takes a string as input, extracts all occurrences of nested bracketed
 * expressions inside it and returns an array of these expressions with their respective
 * openers and closers separated by an empty string.
 * 
 * @param { string } text - given code to be documented, which is processed by the
 * function to generate the output array of tags.
 * 
 * @param { string } openBrackets - opening bracket of a tag, which is used to keep
 * track of the current floor in the nested structure.
 * 
 * @param { string } closingBrackets - 2nd part of the nesting brackets that the
 * function should be looking for to determine if it's a new tag, or continuation of
 * a previously found one.
 * 
 * @returns { string } an array of tags, including nested tags and their associated
 * brackets.
 */
export const parseNestedBrackets = (
  text: string,
  openBrackets = '<',
  closingBrackets = '>'
) => {
  let array: string[] = [] // The array of the tags in this present floor.
  let prFloor = 0 // The present floor.
  let begin = 0, // The begin index of the tag.
    end = 0 // The end index of the tag.
  for (let i = 0; i < text.length; i++) {
    if (text[i] === openBrackets) {
      prFloor++
      if (prFloor === 1) begin = i
    } else if (text[i] === closingBrackets) {
      if (prFloor === 1) {
        end = i
        const tag = text.slice(begin + 1, end)
        // push the tag in this present floor.
        array.push(`${openBrackets}${tag}${closingBrackets}`)
        // push the array of the tags in the next floor.
        array = array.concat(
          parseNestedBrackets(tag, openBrackets, closingBrackets)
        )
      }
      prFloor--
    }
  }
  return array
}
