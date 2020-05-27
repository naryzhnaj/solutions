
/**
 * Your mission is to convert the name of a function (a string) from CamelCase ("MyFunctionName") 
 * into the Python format ("my_function_name") where all chars are in lowercase and all words 
 * are concatenated with an intervening underscore symbol "_".
 *
 * Input: A function name as a CamelCase string.
 * Output: The same string, but in under_score.
 */
function fromCamelCase(name: string): string {
    var words = name.match(/[A-Z][a-z]*/g);
    return words.map(w => w[0].toLowerCase() + w.slice(1)).join('_');
}
/*  These "asserts" are used for self-checking
    assert.equal(fromCamelCase('MyFunctionName'), 'my_function_name');
    assert.equal(fromCamelCase('IPhone'), 'i_phone');
*/