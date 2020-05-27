
/**
 * In a given text you need to sum the numbers. Only separated numbers should be counted.
 * If a number is part of a word it shouldn't be counted.
 * The text consists from numbers, spaces and english letters
 */
function sumNumbers(test: string): number {
    const numbers = test.match(/\b(\d+)\b/g);
    return (numbers) ? numbers.reduce((sum, el) => sum+=Number(el), 0) : 0;
}

/*  These "asserts" are used for self-checking
assert.equal(sumNumbers('hi'), 0);
assert.equal(sumNumbers('who is 1st here'), 0);
assert.equal(sumNumbers('my numbers is 2'), 2);
assert.equal(sumNumbers('This picture is an oil on canvas '+
 'painting by Danish artist Anna '+
 'Petersen between 1845 and 1910 year'), 3755);
assert.equal(sumNumbers('5 plus 6 is'), 11);
assert.equal(sumNumbers(''), 0);
*/