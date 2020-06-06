/**
 * You are given a block of text with different words.
 * These words are separated by white-spaces and punctuation marks.
 * Numbers are not considered words in this mission (a mix of letters and digits is not a word either).
 * You should count the number of words (striped words) where the vowels with consonants are alternating,
 * that is; words that you count cannot have two consecutive vowels or consonants.
 * The words consisting of a single letter are not striped -- do not count those.
 * Casing is not significant for this mission.
 *
 * Input: A text as a string (unicode)
 * Output: A quantity of striped words as an integer.
 */
const testWord = (word: string) => (word.length > 1) && !(/\d|[AEIOUY]{2}|[BCDFGHJKLMNPQRSTVWXZ]{2}/i.test(word));
  
function stripedWords(text: string):number {
    const words = text.match(/\w+/g);
    return words.filter(testWord).length;
}

/*  These "asserts" are used for self-checking
    assert.equal(stripedWords('My name is ...'), 3);
    assert.equal(stripedWords('Hello world'), 0);
    assert.equal(stripedWords('A quantity of striped words.'), 1);
    assert.equal(stripedWords('Dog,cat,mouse,bird.Human.'), 3);
*/