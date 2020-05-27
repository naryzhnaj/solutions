
/**
 * In a given string you should reverse every word, but the words should stay in their places.
 * Precondition: The line consists only from alphabetical symbols and spaces.
 */
function backwardStringByWord(text: string): string {
    return text.replace(/[a-z]+/gi, (word) => word.split('').reverse().join(''));
}

/*  These "asserts" are used for self-checking
assert.equal(backwardStringByWord(''), '');
assert.equal(backwardStringByWord('world'), 'dlrow');
assert.equal(backwardStringByWord('hello world'), 'olleh dlrow');
assert.equal(backwardStringByWord('hello   world'), 'olleh   dlrow');
assert.equal(backwardStringByWord('welcome to a game'), 'emoclew ot a emag');
*/